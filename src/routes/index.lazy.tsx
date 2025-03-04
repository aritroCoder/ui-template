import { createLazyFileRoute } from "@tanstack/react-router";
import Dashboard from "../pages/dashboard/Dashboard";

export const Route = createLazyFileRoute("/")({
  component: Dashboard,
});
