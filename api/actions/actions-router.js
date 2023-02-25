const express = require("express");
const router = express.Router();
const Actions = require("./actions-model");
router.get("/api/actions", (req, res, next) => {
  Actions.get().then((r) => res.json(r));
});
router.get("/api/actions/:id", (req, res, next) => {
  const { id } = req.params;
  Actions.get(id).then((r) => res.json(r));
});
router.post("/api/actions", (req, res, next) => {
  const { project_id, description, notes } = req.body;
  console.log(2);
  Actions.insert({ project_id, description, notes }).then((r) =>
    res.status(200).json(r)
  );
});
router.put("/api/actions/:id", (req, res, next) => {
  const { id } = req.params;
  const { description } = req.body;
  Actions.update(id, { description }).then((r) => res.json(r));
});
router.delete("/api/actions/:id", (req, res, next) => {
  const { id } = req.params;

  Actions.remove(id).then((r) => res.json(r));
});
module.exports = router;
