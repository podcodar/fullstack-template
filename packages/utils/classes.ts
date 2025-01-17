import type { Optional } from "./types";

/**
 * Generates a string of unique CSS classes from the provided list,
 * filtering out non-string values and empty strings.
 *
 * Ensures that the output contains only valid, non-empty class names,
 * and removes any duplicates.
 *
 * @param {...OptionalString[]} classList - A variable number of CSS class names.
 *
 * @return {string} A string of unique, valid CSS classes, separated by spaces.
 *
 * @example classes("bg-red-500", "text-white");
 * >>> "bg-red-500 text-white"
 *
 * @example classes("bg-red-500", "bg-red-500");
 * >>> "bg-red-500"
 *
 * @example classes("bg-red-500", "", null, undefined, "text-white", 42);
 * >>> "bg-red-500 text-white"
 *
 *  @example classes("bg-red-500 w-4", "bg-red-500 px-3");
 * >>> "bg-red-500 w-4 px-3"
 */
export function classes(...classList: Optional<string | false>[]): string {
  const tokenMap = new Map<string, string>();

  for (const className of classList) {
    if (!className || className.trim().length === 0) continue;

    for (const token of className.split(" ")) {
      const tokenKey = token.replaceAll(/\d*/g, "");
      tokenMap.set(tokenKey, token);
    }
  }

  const validClasses = Array.from(tokenMap.values());
  if (validClasses.length === 0) return "";

  return validClasses.join(" ");
}
