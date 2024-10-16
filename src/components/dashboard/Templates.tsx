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
import { ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import AutoReplyMessageModal from "../modal/AutoReplyMessageModal";

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "test",
      messageType: "Text",
      message: "Hello Test Template",
      preview: "No",
    },
    // Adding more sample data for potential future pagination
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 2,
      name: `Template ${i + 2}`,
      messageType: "Text",
      message: `Sample template message ${i + 2}`,
      preview: "No",
    })),
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(templates.length / itemsPerPage);

  const paginatedTemplates = templates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCreateMessage = (newMessage) => {
    setTemplates((prev) => [
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
        headlineText={"Create Template Message"}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleCreateMessage={handleCreateMessage}
      />

      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Templates</h3>
            <Button onClick={() => setIsModalOpen(true)}>Add Template</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Message Type</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Preview</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedTemplates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell>{template.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {template.messageType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <pre className="whitespace-pre-wrap max-w-md overflow-hidden text-ellipsis">
                      {template.message}
                    </pre>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-red-100 text-red-800"
                    >
                      {template.preview}
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
