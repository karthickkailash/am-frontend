import { dashboardUrl } from "../assets/constants/pageurl";
import Dashboard from "../pages/dashboard";
import HeaderLayout from "../pages/header/headerlayout";

export const RouteObject = [
  {
    id: 1,
    path: dashboardUrl,
    element: <Dashboard />,
  },
];
