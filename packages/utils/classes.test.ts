import { expect, test } from "bun:test";
import { classes } from "./classes";

test("test_with_empty_arguments", () => {
  const input: string[] = [];

  const expected = "";

  expect(classes(...input)).toBe(expected);
});

test("test_with_valid_argument", () => {
  const input: string[] = ["bg-red-500"];

  const expected = "bg-red-500";

  expect(classes(...input)).toBe(expected);
});

test("test_with_multiple_valid_arguments", () => {
  const input: string[] = ["bg-red-500", "text-white"];

  const expected = "bg-red-500 text-white";

  expect(classes(...input)).toBe(expected);
});

test("test_with_dynamic_argument", () => {
  const darkMode = Math.random() > 0.5 ? "dark" : "light";
  const input: string[] = ["bg-red-500", darkMode];

  const expected = `bg-red-500 ${darkMode}`;

  expect(classes(...input)).toBe(expected);
});

test("test_with_non_string_argument", () => {
  const input = ["bg-red-500", false as const];
  const expected = "bg-red-500";

  expect(classes(...input)).toBe(expected);
});

test("test_with_null_and_undefined_arguments", () => {
  const input = ["bg-red-500", null, undefined];

  const expected = "bg-red-500";

  expect(classes(...input)).toBe(expected);
});

test("test_with_empty_string_argument", () => {
  const input: string[] = ["bg-red-500", ""];

  const expected = "bg-red-500";

  expect(classes(...input)).toBe(expected);
});

test("test_with_mixed_arguments", () => {
  const input = ["bg-red-500", "", null, undefined, "text-white"];
  const expected = "bg-red-500 text-white";

  expect(classes(...input)).toBe(expected);
});

test("test_with_only_invalid_arguments", () => {
  const input = [null, undefined, false as const, ""];
  const expected = "";

  expect(classes(...input)).toBe(expected);
});

test("test_with_duplicate_arguments", () => {
  const input: string[] = ["bg-red-500", "bg-red-500"];

  const expected = "bg-red-500";

  expect(classes(...input)).toBe(expected);
});

test("test_with_duplicated_classes_in_combined_strings", () => {
  const input: string[] = ["bg-red-500 w-4", "bg-red-500 px-3"];

  const expected = "bg-red-500 w-4 px-3";

  expect(classes(...input)).toBe(expected);
});

test("test_with_conflicting_tokens", () => {
  const input: string[] = ["bg-red-900 px-4", "bg-red-500 px-3"];

  const expected = "bg-red-500 px-3";

  expect(classes(...input)).toBe(expected);
});
