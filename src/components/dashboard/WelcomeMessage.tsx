import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";
import AutoReplyMessageModal from "../modal/AutoReplyMessageModal";

export default function WelcomeMessagePage() {
  const [welcomeMessages, setWelcomeMessages] = useState([
    {
      id: 1,
      enabled: true,
      instance: "",
      messageType: "Text",
      message: `Welcome To RKB Sales
Enter Number
1 Help
2 Order
3 Get Website Link
4 Address
5 Callback

Thankyou`,
      preview: "No",
    },
    // Add more sample messages here to demonstrate pagination
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 2,
      enabled: Math.random() > 0.5,
      instance: `Instance ${i + 2}`,
      messageType: "Text",
      message: `Sample message ${i + 2}`,
      preview: Math.random() > 0.5 ? "Yes" : "No",
    })),
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(welcomeMessages.length / itemsPerPage);

  const paginatedMessages = welcomeMessages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCreateMessage = (newMessage) => {
    setWelcomeMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newMessage,
        preview: "No",
      },
    ]);
    setIsModalOpen(false);
  };
  return (
    <main className="flex-1 p-8 overflow-auto">
      <AutoReplyMessageModal
        headlineText={"Create Welcome Message"}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleCreateMessage={handleCreateMessage}
      />

      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Welcome Message</h3>
            <Button onClick={() => setIsModalOpen(true)}>
              Add Welcome Message
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Enable</TableHead>
                <TableHead>Instance</TableHead>
                <TableHead>Message Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Preview</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedMessages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>
                    {message.enabled ? (
                      <Check className="text-green-500" />
                    ) : (
                      <X className="text-red-500" />
                    )}
                  </TableCell>
                  <TableCell>{message.instance}</TableCell>
                  <TableCell>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {message.messageType}
                    </span>
                  </TableCell>
                  <TableCell>
                    <pre className="whitespace-pre-wrap">{message.message}</pre>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        message.preview === "Yes"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {message.preview}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-end items-center mt-4 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <footer className="mt-8 text-center text-sm text-gray-500">
        Copyright © 2024 Designed & Developed By The Social Era
      </footer>
    </main>
  );
}
