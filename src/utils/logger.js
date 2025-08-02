// src/utils/logger.js
export const logEvent = async (event, details = {}) => {
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYWplc2hzYXJhdmFuYW4yMDA0QGdtYWlsLmNvbSIsImV4cCI6MTc1NDExMzEwOSwiaWF0IjoxNzU0MTEyMjA5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDY5MjIyNjUtMmM1MS00NzQwLThkNTYtZDc1M2ZmYTcwNzc5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmFqZXNoIGt1bWFyIHMiLCJzdWIiOiJhZDYxNWZjOS0yNDhjLTQ4YjItYTU2Yy1kZmJlZTIwYjRlZGYifSwiZW1haWwiOiJyYWplc2hzYXJhdmFuYW4yMDA0QGdtYWlsLmNvbSIsIm5hbWUiOiJyYWplc2gga3VtYXIgcyIsInJvbGxObyI6IjkyMTMyMjE1MTUxIiwiYWNjZXNzQ29kZSI6InJCUGZTUyIsImNsaWVudElEIjoiYWQ2MTVmYzktMjQ4Yy00OGIyLWE1NmMtZGZiZWUyMGI0ZWRmIiwiY2xpZW50U2VjcmV0IjoiU0J4Z0dleUhiQkpYUHRaeSJ9.noseQtWemR_Iu4zlcnqlDB14u6e8U9yE-fbl5AGcKek";

  const logPayload = {
    event,
    details,
    timestamp: new Date().toISOString()
  };

  try {
    await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(logPayload)
    });
  } catch (error) {
    console.log("Failed to log event", error);
  }
};
