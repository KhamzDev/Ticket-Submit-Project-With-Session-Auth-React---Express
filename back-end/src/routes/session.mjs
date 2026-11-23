import { Router } from "express";
import { mockUsers } from "../data/mockUsers.mjs";
import authCheck from "../utils/authCheck.mjs";

const router = Router();

router.get("/api/auth/check", (req, res) => {
    if(!req.session || !req.session.user){
        return res.status(200).send({loginStatus: false});
    }

    return res.status(200).send({loginStatus: true});
})

router.post("/api/auth/login", (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(200).send({msg: "Please provide credentials", loginStatus: false});

    const foundUser = mockUsers.find((u) => u.username === username);
    if(!foundUser || foundUser.password !== password) return res.status(200).send({msg: "Invalid credentials", loginStatus: false});

    const { id, user, company, role } = foundUser;
    req.session.user = { id, user, company, role };

    return res.status(200).send({loginStatus: true});
})

router.post("/api/auth/logout", (req, res, next) => {
    if(!req.session) return res.status(200).send({msg: "Alredy logget out"});

    req.session.destroy((err) => {
        if(err){
            return res.status(500).send({error: "Failed to logout"})
        };

        res.clearCookie('cookie');

        return res.status(200).send({msg: "Succefully logged out"});
    })
})

router.get("/api/auth/me", authCheck, (req, res) => {
    return res.status(200).send(req.session.user)
})

export default router;