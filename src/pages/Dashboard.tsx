import { Button } from "@/components/ui/button";
import {
  BarChart2,
  FileText,
  Filter,
  LineChart,
  MessageCircle,
  MessageSquare,
  PanelLeft,
  Search,
  Send,
  Settings,
  User,
  UserMinus,
  Users,
  Users2,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ROUTES } from "@/constants/route";
import { Link, Outlet, useLocation } from "react-router-dom";

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information.";

export default function Dashboard() {
  const navMenues = [
    {
      icon: (
        <MessageCircle className="h-5 w-5 transition-all group-hover:scale-110" />
      ),
      mobileIcon: <MessageCircle className="h-5 w-5" />,
      label: "Dashboard",
      pathname: "",
    },
    {
      icon: <Send className="h-5 w-5 transition-all group-hover:scale-110" />,
      mobileIcon: <Send className="h-5 w-5" />,
      label: "Devices",
      pathname: "devices",
    },
    {
      icon: (
        <MessageSquare className="h-5 w-5 transition-all group-hover:scale-110" />
      ),
      mobileIcon: <MessageSquare className="h-5 w-5" />,
      label: "Send Message",
      pathname: "send-message",
    },
    {
      icon: (
        <MessageCircle className="h-5 w-5 transition-all group-hover:scale-110" />
      ),
      mobileIcon: <MessageCircle className="h-5 w-5" />,
      label: "Welcome Message",
      pathname: "welcome-message",
    },
    {
      icon: (
        <MessageCircle className="h-5 w-5 transition-all group-hover:scale-110" />
      ),
      mobileIcon: <MessageCircle className="h-5 w-5" />,
      label: "Auto Reply",
      pathname: "auto-reply",
    },
    {
      icon: (
        <FileText className="h-5 w-5 transition-all group-hover:scale-110" />
      ),
      mobileIcon: <FileText className="h-5 w-5" />,
      label: "Templates",
      pathname: "templates",
    },
    {
      icon: <Users className="h-5 w-5 transition-all group-hover:scale-110" />,
      mobileIcon: <Users className="h-5 w-5" />,
      label: "Contacts",
      pathname: "contacts",
    },
    {
      icon: (
        <UserMinus className="h-5 w-5 transition-all group-hover:scale-110" />
      ),
      mobileIcon: <UserMinus className="h-5 w-5" />,
      label: "Unsubscribers",
      pathname: "unsubscribers",
    },
    {
      icon: <Filter className="h-5 w-5 transition-all group-hover:scale-110" />,
      mobileIcon: <Filter className="h-5 w-5" />,
      label: "Number Filter",
      pathname: "number-filter",
    },
    {
      icon: <Users2 className="h-5 w-5 transition-all group-hover:scale-110" />,
      mobileIcon: <Users2 className="h-5 w-5" />,
      label: "Group Grabber",
      pathname: "group-grabber",
    },
    {
      icon: (
        <BarChart2 className="h-5 w-5 transition-all group-hover:scale-110" />
      ),
      mobileIcon: <BarChart2 className="h-5 w-5" />,
      label: "Report",
      pathname: "report",
    },
    {
      icon: (
        <MessageCircle className="h-5 w-5 transition-all group-hover:scale-110" />
      ),
      mobileIcon: <MessageCircle className="h-5 w-5" />,
      label: "Received Messages",
      pathname: "received-messages",
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <TooltipProvider>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            {navMenues.map((navItem) => {
              return (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={`/dashboard/${navItem.pathname}`}
                      className={
                        `/dashboard/${navItem.pathname}` === pathname
                          ? "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                          : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      }
                    >
                      {/* group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base */}
                      {/* <Home className="h-5 w-5" /> */}
                      {navItem.icon}
                      <span className="sr-only">{navItem.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{navItem.label}</TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={`/dashboard/${ROUTES.SETTINGS.pathname}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </TooltipProvider>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="default" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                {navMenues.map((navItem) => {
                  return (
                    <Link
                      to={`/dashboard/${navItem.pathname}`}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      {navItem.mobileIcon}
                      <Label>{navItem.label}</Label>
                    </Link>
                  );
                })}
                <Link
                  to={`/dashboard/${ROUTES.SETTINGS.pathname}`}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              {pathname.split("/").map((path) => {
                return (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="#" className="text-primary">
                          {path.toUpperCase().replace(/-/g, " ")}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="overflow-hidden rounded-full"
              >
                <User className="h-4 w-4"></User>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* <div className="flex-1 px-8 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold">
                Welcome Dharmendra Rathore
              </h2>
              <p className="text-sm text-gray-500">
                Your license will expire on 06-04-2025
              </p>
            </div>
            <Button>Renew</Button>
          </div>
        </div> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
}
