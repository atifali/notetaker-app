import express from "express"

const app = express();
const port = 5001;

app.get("/api/notes", (req, res) => {
    res.status(200).send("you got 5 notes");
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});