```markdown
# 🔁 Log Generator Lambda

Lambda simples responsável por simular a geração de logs e enviá-los para o CloudWatch Logs. Esses logs são consumidos por outra função (`log-indexer-lambda`) para indexação no OpenSearch.

## 🚀 Tecnologias

- AWS Lambda (Node.js 22)
- AWS CloudWatch Logs
- Serverless Framework v4
- TypeScript

## 📌 O que este projeto faz?

Simula a geração de eventos de log para testes locais e em ambiente real. É útil em pipelines de observabilidade para validar integrações com ferramentas como OpenSearch.

## 🧱 Estrutura do Projeto

├── src/
│ └── handler.ts # Função Lambda que gera logs aleatórios
├── serverless.yml # Configuração da função e permissões
├── package.json
└── tsconfig.build.json

arduino
Copiar
Editar

## 📦 Deploy

```bash
npm install
npm run build
npm run deploy
🔁 Como usar
Para gerar um lote de logs manualmente:

bash
Copiar
Editar
aws lambda invoke \
  --function-name log-generator-lambda-dev-generateLogs \
  --payload '{}' \
  response.json
Os logs gerados serão enviados automaticamente para o grupo de logs da AWS:

python
Copiar
Editar
/aws/lambda/log-generator-lambda-dev-generateLogs
E consumidos pela função log-indexer-lambda.

🧠 Aprendizados
Geração de eventos simulados com foco em observabilidade

Trigger de logs para consumo assíncrono via Lambda

Integração simples e eficaz com CloudWatch Logs

yaml
Copiar
Editar

---

Se quiser agora podemos montar a versão **resumida do case completo** pra usar como introdução no Medium e no LinkedIn. Só falar!







