import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import morgan from "morgan"

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

try {
    connectDB().then(() => {
        app.listen(port, () => {
            console.log(`Server started on port: ${port}`);
        });
    });
} catch (error) {
    console.error("Error in starting up the server...", error);
}
