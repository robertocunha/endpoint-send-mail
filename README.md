# HTTP API com Node + Express

Projeto de estudo para criar e testar uma API HTTP simples utilizando **Node.js** e **Express**.

## Estrutura inicial

- `server.js`: servidor básico com um endpoint `POST /teleconsulta`
- `package.json`: configuração do projeto Node
- `.gitignore`: ignora `node_modules/`

## Como rodar

Instalar dependências:

```bash
npm install
```

Rodar servidor:

```bash
node server.js
```
O servidor estará disponível em http://localhost:3001.

# Testando com curl

Exemplo de requisição:

```bash
curl -X POST http://localhost:3001/teleconsulta \
  -H "Content-Type: application/json" \
  -d '{"client": {"name": "Fulano", "email": "fulano@exemplo.com", "phone": "123456789"}, "answers": []}'
```
Resposta esperada:

```json
{"ok": true}
```
