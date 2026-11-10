export function getOutstandingBalance(payments: readonly number[]): number {
  const dValue = process.env.D;
  if (dValue === undefined || !/^\d+$/.test(dValue)) {
    throw new Error("D must be set to a non-negative integer.");
  }

  const d = Number(dValue);
  if (!Number.isSafeInteger(d)) {
    throw new RangeError("D must be a safe integer.");
  }

  const termlyFee = 45_000 + d * 5_000;
  if (!Number.isSafeInteger(termlyFee)) {
    throw new RangeError("The calculated termly fee exceeds the safe integer range.");
  }

  const totalPaid = payments.reduce((total, payment) => {
    if (!Number.isSafeInteger(payment) || payment < 0) {
      throw new RangeError("Payments must be non-negative safe integers in XOF.");
    }

    const updatedTotal = total + payment;
    if (!Number.isSafeInteger(updatedTotal)) {
      throw new RangeError("The total payments exceed the safe integer range.");
    }

    return updatedTotal;
  }, 0);

  return Math.max(termlyFee - totalPaid, 0);
}
