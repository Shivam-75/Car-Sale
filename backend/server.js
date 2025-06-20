import express from "express";
import { db } from "./db/db.js";
import { userRoute } from "./routes/register.routes.js";
import { carRoute } from "./routes/supercar.route.js";
import cors from "cors"
import { config } from "dotenv";

config({
    path:"./.env"
})
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: "http://localhost:5173",
    methods: "POST,GET,PUT,DELETE",
    credentials: true
}));
app.use("/api/user", userRoute);
app.use("/api/car", carRoute)


const port = process.env.PORT||8000
const url = process.env.URL;

db(url).then(() => {
    app.listen(port, () => {
        console.log(`server us running on port ${port}`)
    })
}).catch((err) => {
    console.log("port error ", err);
});
