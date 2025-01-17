import { cookies } from "@packages/settings";
import { createCookie } from "react-router";

export const selectedTheme = createCookie("selected-theme", {
  path: "/",
  maxAge: cookies.maxAge,
});
