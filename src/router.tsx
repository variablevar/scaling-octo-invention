import { createBrowserRouter } from "react-router-dom";
import AutoReplyPage from "./components/dashboard/AutoReply";
import ContactsPage from "./components/dashboard/Contacts";
import DevicesPage from "./components/dashboard/Devices";
import GroupGrabberPage from "./components/dashboard/GroupGrabber";
import HomePage from "./components/dashboard/Home";
import NumberFilterPage from "./components/dashboard/NumberFilter";
import ReceivedMessagePage from "./components/dashboard/ReceivedMessage";
import ReportPage from "./components/dashboard/Report";
import SendMessagePage from "./components/dashboard/SendMessage";
import SettingsScreen from "./components/dashboard/Setting";
import TemplatesPage from "./components/dashboard/Templates";
import UnsubscribersPage from "./components/dashboard/Unsubscribers";
import WelcomeMessagePage from "./components/dashboard/WelcomeMessage";
import { ROUTES } from "./constants/route";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: ROUTES.DASHBOARD.pathname,
        element: <HomePage />,
      },
      {
        path: ROUTES.DEVICES.pathname,
        element: <DevicesPage />,
      },
      {
        path: ROUTES.SEND_MESSAGE.pathname,
        element: <SendMessagePage />,
      },
      {
        path: ROUTES.WELCOME_MESSAGE.pathname,
        element: <WelcomeMessagePage />,
      },
      {
        path: ROUTES.AUTO_REPLY.pathname,
        element: <AutoReplyPage />,
      },
      {
        path: ROUTES.TEMPLATES.pathname,
        element: <TemplatesPage />,
      },
      {
        path: ROUTES.CONTACTS.pathname,
        element: <ContactsPage />,
      },
      {
        path: ROUTES.UNSUBSCRIBERS.pathname,
        element: <UnsubscribersPage />,
      },
      {
        path: ROUTES.NUMBER_FILTER.pathname,
        element: <NumberFilterPage />,
      },
      {
        path: ROUTES.GROUP_GRABBER.pathname,
        element: <GroupGrabberPage />,
      },
      {
        path: ROUTES.REPORT.pathname,
        element: <ReportPage />,
      },
      {
        path: ROUTES.RECEIVED_MESSAGES.pathname,
        element: <ReceivedMessagePage />,
      },

      {
        path: ROUTES.SETTINGS.pathname,
        element: <SettingsScreen />,
      },
    ],
  },
]);
