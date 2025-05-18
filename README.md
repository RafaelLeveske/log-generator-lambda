# 🔁 Log Generator Lambda

A simple Lambda function responsible for simulating log generation and sending them to **AWS CloudWatch Logs**. These logs are consumed by another function (`log-indexer-lambda`) for indexing into **OpenSearch**.

---

## 🚀 Technologies Used

- **AWS Lambda** (Node.js 22)
- **AWS CloudWatch Logs**
- **Serverless Framework** v4
- **TypeScript**

---

## 📌 What does this project do?

This project simulates log event generation, both for local tests and real environments. It’s especially useful in observability pipelines, allowing validation of integrations with tools like **OpenSearch**.

---

## 🧱 Project Structure

```
├── src/
│   └── handler.ts             # Lambda function that generates random logs
├── serverless.yml             # Function configuration and permissions
├── package.json
└── tsconfig.build.json
```

---

## 📦 Deploy

Install dependencies, compile, and deploy:

```bash
npm install
npm run build
npm run deploy
```

---

## 🔁 How to use

To manually trigger a batch of logs:

```bash
aws lambda invoke \
  --function-name log-generator-lambda-dev-generateLogs \
  --payload '{}' \
  response.json
```

The generated logs will automatically be sent to the AWS logs group:

```
/aws/lambda/log-generator-lambda-dev-generateLogs
```

These logs will be consumed by the `log-indexer-lambda` function.

---

## 🧠 Learnings

- Simulated event generation focused on **observability**
- Asynchronous log triggering via **Lambda**
- Simple and effective integration with **CloudWatch Logs**

---

Enjoyed this project? Check out the [`log-indexer-lambda`](https://github.com/seu-usuario/log-indexer-lambda) which complements this solution!
