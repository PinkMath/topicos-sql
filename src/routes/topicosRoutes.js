const express = require("express");
const router = express.Router();

const TopicoController = require("../controllers/topicosControllers");

// listar todos os tópicos
router.get("/", TopicoController.listarTodos);

// buscar tópico por id
router.get("/:id", TopicoController.buscarPorId);

// criar novo tópico
router.post("/", TopicoController.criar);

// atualizar tópico
router.put("/:id", TopicoController.atualizar);

// deletar tópico
router.delete("/:id", TopicoController.deletar);

// os novos 2 gets
// geografia
router.get("/geo/1", TopicoController.selectgeo1); 
router.get("/geo/2/:chave", TopicoController.selectgeo2); 
// ingles
router.get("/ing/1", TopicoController.selecting1); 
router.get("/ing/2/:chave", TopicoController.selecting2); 

module.exports = router;