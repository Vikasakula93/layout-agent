export async function callLLM(message) {
  return {
    explanation: `Processed instruction: ${message}`
  };
}