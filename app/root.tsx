import type { Theme } from "@packages/utils/theme";
import {
  type ActionFunctionArgs,
  Links,
  type LinksFunction,
  type LoaderFunctionArgs,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  redirect,
  useLoaderData,
  useRouteError,
} from "react-router";

import "./tailwind.css";
import Metadata from "@packages/components/Metadata";
import NavBar from "@packages/components/NavBar";
import { selectedTheme } from "./cookies.server";

export const links: LinksFunction = () => [
  // NOTE: Example of blocking scripts
  //
  //{ rel: "preconnect", href: "https://fonts.googleapis.com" },
  //{
  //	rel: "preconnect",
  //	href: "https://fonts.gstatic.com",
  //	crossOrigin: "anonymous",
  //},
  //{
  //	rel: "stylesheet",
  //	href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  //},
];

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const rawTheme = await selectedTheme.parse(cookieHeader);
  const theme: Theme = rawTheme ?? "system";

  return { theme };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const theme = (formData.get("theme") ?? "system") as Theme;

  const redirectUrl = request.headers.get("referer") ?? "/";

  return redirect(redirectUrl, {
    headers: {
      "Set-Cookie": await selectedTheme.serialize(theme),
    },
  });
}

export function Layout({ children }: React.PropsWithChildren) {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <html lang="en" data-theme={theme} className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

        <Metadata />
      </head>

      <body>
        <NavBar />
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }

  return <h1>Unknown Error</h1>;
}
