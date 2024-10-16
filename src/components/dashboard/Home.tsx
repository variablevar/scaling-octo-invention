import { FileText, MessageCircle, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
function HomePage() {
  return (
    <div className="flex-1 p-8 overflow-auto">
      {/* Summary cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {[
          {
            label: "Devices",
            value: "1 Instance",
            icon: <Send className="text-green-500" />,
          },
          {
            label: "Auto Reply",
            value: "4",
            icon: <MessageCircle className="text-blue-500" />,
          },
          {
            label: "WelcomeMessage",
            value: "1",
            icon: <MessageCircle className="text-green-500" />,
          },
          {
            label: "Templates",
            value: "0",
            icon: <FileText className="text-yellow-500" />,
          },
          {
            label: "Total Campaigns",
            value: "1",
            icon: <MessageCircle className="text-blue-500" />,
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.label}
              </CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Messages", value: 17 },
          { label: "Pending Messages", value: 0 },
          { label: "Auto Reply Messages", value: 12 },
          { label: "Welcome Message", value: 3 },
          { label: "Message Sent", value: 2 },
          { label: "Paused Messages", value: 0 },
          { label: "Error While Sending", value: 0 },
          { label: "Invalid Number", value: 0 },
          { label: "Cancelled Messages", value: 0 },
          { label: "Instance Not Connected While Sending", value: 0 },
          { label: "Instance Not Found While Sending", value: 0 },
          { label: "Not A WhatsApp Number", value: 0 },
          { label: "Message Not Send To Unsubscriber", value: 0 },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-gray-500">
        Copyright © 2024 Designed & Developed By The Social Era
      </footer>
    </div>
  );
}

export default HomePage;
