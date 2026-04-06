const pool = require("../config/database");

async function listarTodos() {
  const result = await pool.query(
    "SELECT * FROM topicos ORDER BY idt"
  );
  return result.rows;
}

async function buscarPorId(id) {
  const result = await pool.query(
    "SELECT * FROM topicos WHERE idt = $1",
    [id]
  );
  return result.rows[0];
}

async function criar(dados) {
  const { disciplina, professor, descricao_topico } = dados;

  const sql = `
    INSERT INTO topicos (disciplina, professor, descricao_topico)
    VALUES ($1, $2, $3)
    RETURNING *
  `;

  const result = await pool.query(sql, [
    disciplina,
    professor,
    descricao_topico,
  ]);

  return result.rows[0];
}

async function atualizar(id, dados) {
  const { disciplina, professor, descricao_topico } = dados;

  const sql = `
    UPDATE topicos
    SET disciplina = $1,
        professor = $2,
        descricao_topico = $3
    WHERE idt = $4
    RETURNING *
  `;

  const result = await pool.query(sql, [
    disciplina,
    professor,
    descricao_topico,
    id,
  ]);

  return result.rows[0] || null;
}

async function deletar(id) {
  const result = await pool.query(
    "DELETE FROM topicos WHERE idt = $1",
    [id]
  );

  return result.rowCount > 0;
}

// select
// geo
async function selectgeo1() {
  const result = await pool.query(
    `
    SELECT 
    t.disciplina,
    q.enunciado,
    q.resposta
    FROM questoes q
    JOIN topicos t ON q.topicoid = t.idt
    WHERE t.disciplina = 'Geografia';
    `
  );
  return result.rows;
}

async function selectgeo2() {
  const result = await pool.query(
    `
    SELECT 
    t.disciplina,
    t.descricao_topico,
    q.enunciado,
    q.resposta
    FROM questoes q
    JOIN topicos t ON q.topicoid = t.idt
    WHERE t.disciplina = 'Geografia'
      AND t.descricao_topico = 'Meio Ambiente';
    `
  );
  return result.rows;
}

// ingles
async function selecting1() {
  const result = await pool.query(
    `
    SELECT 
    t.disciplina,
    q.enunciado,
    q.resposta
    FROM questoes q
    JOIN topicos t ON q.topicoid = t.idt
    WHERE t.disciplina = 'Inglês';
    `
  );
  return result.rows;
  }
  
async function selecting2() {
  const result = await pool.query(
    `
    SELECT 
    t.disciplina,
    t.descricao_topico,
    q.enunciado,
    q.resposta
    FROM questoes q
    JOIN topicos t ON q.topicoid = t.idt
    WHERE t.disciplina = 'Inglês'
      AND t.descricao_topico = 'Simple Present';
    `
  );
  return result.rows;
}

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar,
  selectgeo1,
  selectgeo2,
  selecting1,
  selecting2
};