import { Router } from "express";
import authCheck from "../utils/authCheck.mjs";
import { ticketsData } from "../data/ticketsData.mjs";
import { mockUsers } from "../data/mockUsers.mjs";

const router = Router();

router.get("/api/tickets", authCheck, (req, res) => {

    if(req.session.user.role === "agent") return res.status(200).send(ticketsData);

    const userFind = mockUsers.find((u) => u.id === req.session.user.id);
    const filterTicket = ticketsData.filter((t) => t.user.company === userFind.company);

    return res.status(200).send(filterTicket);
})

router.get("/api/tickets/:id", authCheck, (req, res) => {
    const { id } = req.params;

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.status(400).send({error: "Please provide a valid ID"});

    const userFind = mockUsers.find((u) => u.id === req.session.user.id);
    let filterTickets;

    if(req.session.user.role === "agent"){
        filterTickets = ticketsData;
    }else{
        filterTickets = ticketsData.filter((t) => t.user.company === userFind.company);
    }

    const matchId = filterTickets.findIndex((item) => item.id === parsedId);
    if(matchId === -1) return res.status(400).send({error: "Ticket not found"});

    return res.status(200).send(filterTickets[matchId]);
})

router.post("/api/tickets", authCheck, (req, res) => {
    const { 
        ticketForm: { title, priority, desc} 
    } = req.body;

    if(!title || !priority || !desc) return res.status(400).send({error: "Please provide ticket details"});

    const ticketId = ticketsData.at(0)?.id ? ticketsData.at(-1)?.id + 1 : 1;

    const ticket = { 
        title: title, 
        priority: priority, 
        desc:desc 
    };
    
    const user = {id: req.session.user.id, user: req.session.user.id, company: req.session.user.company};

    const finalTicket = { 
        id: ticketId, 
        createdAt: new Date().toISOString(),
        status: "open",
        user: user, 
        ticket: ticket };

    ticketsData.push(finalTicket);

    return res.sendStatus(200);
})

export default router