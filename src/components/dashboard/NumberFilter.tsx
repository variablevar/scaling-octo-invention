import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertTriangle, Download, Plus, Upload } from "lucide-react";

export default function NumberFilterPage() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold">Number Filter</h2>
          <div className="md:hidden"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Sample
            </Button>
            <Button variant="outline" size="sm">
              Manual Import
            </Button>
            <Button size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
          </div>
        </div>
        <Alert variant="default" className="mb-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Don't use more than 1000 phone number. This feature under
            development!!!
          </AlertDescription>
        </Alert>
        <Button className="mb-4" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Contact Row
        </Button>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Sr No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Variable 1</TableHead>
                <TableHead>Variable 2</TableHead>
                <TableHead>Variable 3</TableHead>
                <TableHead>Variable 4</TableHead>
                <TableHead>Variable 5</TableHead>
                <TableHead>Variable 6</TableHead>
                <TableHead>Variable 7</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={11}
                  className="text-center py-10 text-gray-500"
                >
                  No data
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-4">
          <Button size="sm">Filter</Button>
        </div>
      </div>
    </main>
  );
}
