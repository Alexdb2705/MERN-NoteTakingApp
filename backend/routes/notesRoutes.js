import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send("You just fetched the notes");
});

router.post("/", (req, res) => {
    res.status(201).json({ message: "Note created succesfully!" });
});

router.put("/:id", (req, res) => {
    res.status(200).json({ message: "Note updated succesfully!" });
});

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "Note deleted succesfully!" });
});

export default router
