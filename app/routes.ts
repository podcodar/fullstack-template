import { type RouteConfig, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

const routes = await flatRoutes();

export default [...routes, route("/*", "./catchall.tsx")] satisfies RouteConfig;
