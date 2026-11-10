import assert from "node:assert/strict";
import test from "node:test";
import { getOutstandingBalance } from "../dist/fees.js";

function withD(value, callback) {
  const previousD = process.env.D;
  process.env.D = value;

  try {
    callback();
  } finally {
    if (previousD === undefined) {
      delete process.env.D;
    } else {
      process.env.D = previousD;
    }
  }
}

test("returns zero when a pupil has overpaid", () => {
  withD("2", () => {
    assert.equal(getOutstandingBalance([60_000]), 0);
  });
});

test("returns zero when payments exactly cover the fee", () => {
  withD("2", () => {
    assert.equal(getOutstandingBalance([55_000]), 0);
  });
});

test("returns the full fee when there are no payments", () => {
  withD("2", () => {
    assert.equal(getOutstandingBalance([]), 55_000);
  });
});
