import { Badge } from "@/components/ui/badge";
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
import { Check, ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import AutoReplyMessageModal from "../modal/AutoReplyMessageModal";

export default function AutoReplyPage() {
  const [autoReplies, setAutoReplies] = useState([
    {
      id: 1,
      enabled: true,
      keyword: "5",
      instance: "rkb",
      messageType: "Text With Media",
      message: `Hello %name%`,
      preview: "No",
    },
    {
      id: 2,
      enabled: true,
      keyword: "Hello, hello, hi, hay, Hi, Hay",
      instance: "All Instances, rkb",
      messageType: "Text",
      message: "Hello! How can I assist you today?",
      preview: "No",
    },
    {
      id: 3,
      enabled: true,
      keyword: "3",
      instance: "rkb",
      messageType: "Text",
      message: "https://rkbsales.in/",
      preview: "No",
    },
    // Adding more sample data for pagination
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 4,
      enabled: Math.random() > 0.5,
      keyword: `keyword${i + 4}`,
      instance: `instance${i + 4}`,
      messageType: Math.random() > 0.5 ? "Text" : "Text With Media",
      message: `Sample message ${i + 4}`,
      preview: Math.random() > 0.5 ? "Yes" : "No",
    })),
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(autoReplies.length / itemsPerPage);

  const paginatedAutoReplies = autoReplies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCreateMessage = (newMessage) => {
    setAutoReplies((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newMessage,
        keyword: newMessage.keyword,
        preview: "No",
      },
    ]);
    setIsModalOpen(false);
  };
  return (
    <main className="flex-1 p-8 overflow-auto">
      <AutoReplyMessageModal
        headlineText={"Create Auto Reply Message"}
        handleCreateMessage={handleCreateMessage}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Auto Reply</h3>
            <div className="space-x-2">
              <Button
                variant="outline"
                className="text-red-500 hover:text-red-700"
              >
                Clear All
              </Button>
              <Button variant="outline">Show Report</Button>
              <Button onClick={() => setIsModalOpen(true)}>
                Add Auto Reply
              </Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Enable</TableHead>
                <TableHead>Keyword</TableHead>
                <TableHead>Instance</TableHead>
                <TableHead>Message Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Preview</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedAutoReplies.map((reply) => (
                <TableRow key={reply.id}>
                  <TableCell>
                    {reply.enabled ? (
                      <Check className="text-green-500" />
                    ) : (
                      <span className="text-red-500">No</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {reply.keyword.split(",").map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="mr-1 mb-1"
                      >
                        {keyword.trim()}
                      </Badge>
                    ))}
                  </TableCell>
                  <TableCell>
                    {reply.instance.split(", ").map((instance, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="mr-1 mb-1"
                      >
                        {instance}
                      </Badge>
                    ))}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {reply.messageType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <pre className="whitespace-pre-wrap max-w-md overflow-hidden text-ellipsis">
                      {reply.message}
                    </pre>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-red-100 text-red-800"
                    >
                      {reply.preview}
                    </Badge>
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
