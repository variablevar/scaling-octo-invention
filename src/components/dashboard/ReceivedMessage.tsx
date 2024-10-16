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
import { ChevronLeft, ChevronRight, Download, Trash2 } from "lucide-react";
import { useState } from "react";

// Mock data for demonstration
const mockData = [
  {
    id: 1,
    name: "Krishapk",
    number: "919558702304",
    device: "web",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "ab dekhna agar phir se dikhe to",
    receivedAt: "29-09-2024 21:02:31",
  },
  {
    id: 2,
    name: "Krishapk",
    number: "919558702304",
    device: "web",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "reset kiya hai",
    receivedAt: "29-09-2024 21:02:23",
  },
  {
    id: 3,
    name: "",
    number: "919251665283",
    device: "android",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "Hello Sir Good Evening",
    receivedAt: "29-09-2024 20:59:02",
  },
  {
    id: 4,
    name: "",
    number: "918849058093",
    device: "android",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "Yes",
    receivedAt: "29-09-2024 20:59:02",
  },
  {
    id: 5,
    name: "Shubham",
    number: "919824567191",
    device: "android",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "Kuch raheta he to update karta hu.",
    receivedAt: "21-09-2024 14:27:53",
  },
  {
    id: 6,
    name: "Shubham",
    number: "919824567191",
    device: "android",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "Okay",
    receivedAt: "21-09-2024 14:27:46",
  },
  {
    id: 7,
    name: "Shubham",
    number: "919824567191",
    device: "android",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "Okay",
    receivedAt: "21-09-2024 14:26:53",
  },
  {
    id: 8,
    name: "kailash mali",
    number: "916378275595",
    device: "android",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "Hi",
    receivedAt: "21-09-2024 13:46:26",
  },
  {
    id: 9,
    name: "kailash mali",
    number: "916378275595",
    device: "android",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "Cool",
    receivedAt: "21-09-2024 13:46:16",
  },
  {
    id: 10,
    name: "rjrathore9527",
    number: "919773281680",
    device: "android",
    instance: "rki",
    instanceNumber: "918128287970",
    message: "-",
    receivedAt: "21-09-2024 13:44:08",
  },
];

export default function ReceivedMessagesPage() {
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
            <h2 className="text-xl md:text-2xl font-bold">
              Received Message Report
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-red-500 border-red-500"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
              <Button variant="default" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <div className="md:hidden"></div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Number</TableHead>
                  <TableHead>Device</TableHead>
                  <TableHead>Instance</TableHead>
                  <TableHead>Instance Number</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Received At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.number}</TableCell>
                    <TableCell>{item.device}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.instance}</Badge>
                    </TableCell>
                    <TableCell>{item.instanceNumber}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {item.message}
                    </TableCell>
                    <TableCell>{item.receivedAt}</TableCell>
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
