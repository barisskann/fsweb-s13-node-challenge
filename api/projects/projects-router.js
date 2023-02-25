// "project" routerını buraya yazın!
// "eylem" routerını buraya yazın
const express = require("express");
const router = express.Router();
const Project = require("./projects-model");

router.get("/api/projects", (req, res, next) => {
  Project.get().then((r) => res.json(r));
});
router.get("/api/projects/:id", (req, res, next) => {
  const { id } = req.params;
  Project.get(id)
    .then((r) => res.json(r))
    .catch((err) => res.status(400).json({ message: "KULLANICI BULUNAMADI" }));
});
router.post("/api/projects", (req, res, next) => {
  const { description, name } = req.body;
  if (!description || !name) {
    return res.status(400).json({ message: "EKSİK BİLGİLER" });
  }
  Project.insert({ description, name }).then((r) => res.json(r));
});
router.put("/api/projects/:id", (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  Project.update(id, { name })
    .then((r) => res.status(200).json(r))
    .catch((r) => res.status(400).json({ message: "KULLANICI BULUNAMADI" }));
});
router.delete("/api/projects/:id", (req, res, next) => {
  const { id } = req.params;
  Project.remove(id).then((r) => res.status(200).json(r));
});

module.exports = router;
