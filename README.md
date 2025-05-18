# 🔁 Log Generator Lambda

Lambda simples responsável por simular a geração de logs e enviá-los para o **AWS CloudWatch Logs**. Esses logs são consumidos por outra função (`log-indexer-lambda`) para indexação no **OpenSearch**.

---

## 🚀 Tecnologias Utilizadas

- **AWS Lambda** (Node.js 22)
- **AWS CloudWatch Logs**
- **Serverless Framework** v4
- **TypeScript**

---

## 📌 O que este projeto faz?

Este projeto simula a geração de eventos de log, tanto para testes locais quanto em ambiente real. É especialmente útil em pipelines de observabilidade, permitindo validar integrações com ferramentas como o **OpenSearch**.

---

## 🧱 Estrutura do Projeto

```
├── src/
│   └── handler.ts             # Função Lambda que gera logs aleatórios
├── serverless.yml             # Configuração da função e permissões
├── package.json
└── tsconfig.build.json
```

---

## 📦 Deploy

Instale as dependências, compile e realize o deploy:

```bash
npm install
npm run build
npm run deploy
```

---

## 🔁 Como usar

Para gerar um lote de logs manualmente:

```bash
aws lambda invoke \
  --function-name log-generator-lambda-dev-generateLogs \
  --payload '{}' \
  response.json
```

Os logs gerados serão enviados automaticamente para o grupo de logs da AWS:

```
/aws/lambda/log-generator-lambda-dev-generateLogs
```

Esses logs serão consumidos pela função `log-indexer-lambda`.

---

## 🧠 Aprendizados

- Geração de eventos simulados com foco em **observabilidade**
- Trigger de logs para consumo **assíncrono via Lambda**
- Integração simples e eficaz com **CloudWatch Logs**

---

Curtiu o projeto? Confira também o [`log-indexer-lambda`](https://github.com/seu-usuario/log-indexer-lambda) que complementa essa solução!
