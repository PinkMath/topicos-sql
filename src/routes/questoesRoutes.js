const express = require("express");
const router = express.Router();

const QuestaoController = require("../controllers/questoesControllers"); 

router.get("/", QuestaoController.listarTodas); 

// views
router.get("/view/1", QuestaoController.infos_view);
router.get("/view/2", QuestaoController.res);
router.get("/view/3", QuestaoController.vw_questoes_com_topicos);

router.get("/:id", QuestaoController.buscarPorId);

router.get("/topico/:topicoid", QuestaoController.buscarPorTopico);

router.post("/", QuestaoController.criar);

router.put("/:id", QuestaoController.atualizar);

router.delete("/:id", QuestaoController.deletar);

module.exports = router;