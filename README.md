# Tópicos SQL

Uma API RESTful para gerenciamento de tópicos e questões educacionais, utilizando Node.js, Express e PostgreSQL.

## Descrição

Este projeto permite criar, listar, atualizar e deletar tópicos e questões associadas. Os tópicos contêm informações sobre disciplina, professor e descrição, enquanto as questões incluem enunciado, resposta, link bibliográfico e data de inclusão.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Express.js**: Framework web para Node.js
- **PostgreSQL**: Banco de dados relacional
- **pg**: Cliente PostgreSQL para Node.js
- **dotenv**: Gerenciamento de variáveis de ambiente

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/PinkMath/topicos-sql.git
   cd topicossql
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env` com as credenciais do banco de dados:
   ```
   DB_USER=seu_usuario
   DB_HOST=localhost
   DB_NAME=nome_do_banco
   DB_PASSWORD=sua_senha
   DB_PORT=5432
   PORT=2000
   NODE_ENV=development
   ```

4. Certifique-se de que o PostgreSQL está rodando e o banco de dados existe.

5. Execute o servidor:
   ```bash
   node src/app.js
   ```

O servidor estará disponível em `http://localhost:2000`.

## Estrutura do Projeto

```
src/
├── app.js                 # Arquivo principal da aplicação
├── config/
│   └── database.js        # Configuração da conexão com PostgreSQL
├── controllers/
│   ├── topicosControllers.js    # Lógica para tópicos
│   └── questoesControllers.js   # Lógica para questões
├── models/
│   ├── topicosModels.js         # Modelos para tópicos
│   └── questoesModels.js        # Modelos para questões
└── routes/
    ├── topicosRoutes.js         # Rotas para tópicos
    └── questoesRoutes.js        # Rotas para questões
```

## Endpoints da API

### Tópicos

- `GET /topicos` - Lista todos os tópicos
- `GET /topicos/:id` - Busca tópico por ID
- `POST /topicos` - Cria um novo tópico
  - Corpo: `{ "disciplina": "string", "professor": "string", "descricao_topico": "string" }`
- `PUT /topicos/:id` - Atualiza um tópico
- `DELETE /topicos/:id` - Deleta um tópico

### Questões

- `GET /questoes` - Lista todas as questões
- `GET /questoes/:id` - Busca questão por ID
- `GET /questoes/topico/:topicoid` - Busca questões por tópico
- `GET /questoes/view/1` - Visualização de informações das questões
- `GET /questoes/view/2` - Outra visualização (res)
- `GET /questoes/view/3` - Questões com tópicos
- `POST /questoes` - Cria uma nova questão
  - Corpo: `{ "topicoid": number, "enunciado": "string", "resposta": "string", "link_bib": "string", "dtinclusao": "YYYY-MM-DD" }`
- `PUT /questoes/:id` - Atualiza uma questão
- `DELETE /questoes/:id` - Deleta uma questão

### Raiz

- `GET /` - Informações sobre a API

## Banco de Dados

As tabelas são criadas automaticamente ao conectar:

- **topicos**: `idt` (serial), `disciplina` (varchar), `professor` (varchar), `descricao_topico` (varchar)
- **questoes**: `idc` (serial), `topicoid` (int, FK para topicos.idt), `enunciado` (varchar), `resposta` (varchar), `link_bib` (varchar), `dtinclusao` (date)

## Scripts

- `npm test`: Executa testes (atualmente não implementado)

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

ISC
