type Reply = {
  id: string;
  message: string;
  from: "me" | "other";
};

const autoReplies: Reply[] = [
  { id: "1", message: "Olá! Como posso ajudar?", from: "other" },
];

export function autoReply(): Promise<Reply> {
  // Seleciona uma resposta aleatória
  const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];

  // Simula uma Promise com 1s de delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reply);
    }, 1000);
  });
}
