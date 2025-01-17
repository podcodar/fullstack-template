import { expect, test } from "bun:test";
import { raise } from "./typescript";

test("test_raise_an_error", () => {
  const message = "This is an error message";

  expect(() => raise(message)).toThrowError(message);
});

test("test_raise_as_fallback", () => {
  const message = "This is an error message";

  const retursnNull = () => null;
  expect(() => retursnNull() ?? raise(message)).toThrowError(message);

  expect(
    () => process.env.THIS_VAR_DOESNT_EXIST ?? raise(message),
  ).toThrowError(message);
});

test("test_not_raising_if_valid_code", () => {
  process.env.MY_TESTING_VAR = "test";

  expect(() => process.env.MY_TESTING_VAR ?? raise("error")).not.toThrow();
});
