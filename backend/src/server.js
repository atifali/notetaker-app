import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

const app = express();
const port = 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
