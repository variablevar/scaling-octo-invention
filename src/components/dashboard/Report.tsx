import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, Eye, Trash2 } from "lucide-react";
import { useState } from "react";

// Mock data for demonstration
const mockData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Campaign ${i + 1}`,
  instance: "-",
  numbers: Math.floor(Math.random() * 100) + 1,
  messageType: "Text",
  message: `Hello %name% Confirm Your Mobile No %number% ${i + 1}`,
  preview: "No",
  status: i % 3 === 0 ? "Completed" : i % 3 === 1 ? "In Progress" : "Failed",
  createdAt: new Date(
    Date.now() - Math.floor(Math.random() * 10000000000)
  ).toLocaleString(),
}));

export default function ReportPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = mockData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = mockData.slice(startIndex, endIndex);

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <div className="hidden md:block"></div>
      <main className="flex-1 overflow-auto">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Message Report</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-red-500 border-red-500"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
              <div className="md:hidden"></div>
            </div>
          </div>
          <Alert variant="default" className="mb-4">
            <AlertDescription>
              Please note your campaign report cleared after 30 days
            </AlertDescription>
          </Alert>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Instance</TableHead>
                  <TableHead>Numbers</TableHead>
                  <TableHead>Message Type</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Preview</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.instance}</TableCell>
                    <TableCell>{item.numbers}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.messageType}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {item.message}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        {item.preview}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === "Completed"
                            ? "default"
                            : item.status === "In Progress"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 border-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Report
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
                {totalItems} entries
              </span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => {
                  setItemsPerPage(Number(value));
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                )
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
