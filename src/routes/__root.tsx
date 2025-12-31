import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { NavLink } from "./-components/nav-link";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/about">About Page</NavLink>
      </div>
      <hr />
      <Outlet />
      <TanStackDevtools />
    </>
  ),
});
