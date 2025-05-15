import { APIGatewayProxyHandler } from 'aws-lambda';

export const generateLogs: APIGatewayProxyHandler = async () => {
  const levels = ['info', 'warn', 'error'];
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];

  const message = `[${randomLevel.toUpperCase()}] Evento simulado - ${new Date().toISOString()}`;

  console[randomLevel as 'log' | 'warn' | 'error'](message);

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};
