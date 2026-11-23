import 'dotenv/config';
import express from "express";
import routes from './routes/index.mjs';
import cors from "cors";
import session from "express-session"

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173", "http://localhost:5173/"],
}

app.use(express.json());
app.use(cors({
    ...corsOptions,
    credentials: true
}));

app.use(session({
    name: "cookie",
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60) * 20
    }
}))

app.use(routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));