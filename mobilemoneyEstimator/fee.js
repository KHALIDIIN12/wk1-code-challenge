function estimateTransactionFee(amountToSend) {
  const rawFee = amountToSend * 0.015;
  const fee = Math.max(10, Math.min(rawFee, 70));
  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}`);
  console.log("Send Money Securely!");
}

// Prompt user
const input = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(input));