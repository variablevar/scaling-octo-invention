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

export default function GroupGrabberPage() {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <div className="hidden md:block"></div>
      <main className="flex-1 overflow-auto">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Group Grabber</h2>
            <div className="md:hidden"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Instance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instance1">Instance 1</SelectItem>
                  <SelectItem value="instance2">Instance 2</SelectItem>
                  <SelectItem value="instance3">Instance 3</SelectItem>
                </SelectContent>
              </Select>
              <Button>Fetch Groups</Button>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button className="flex-1 md:flex-none">Replace All</Button>
              <Button className="flex-1 md:flex-none">Import All</Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">Sr No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Total Members</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="text-center py-10 text-gray-500"
                    >
                      No data
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">Sr No.</TableHead>
                    <TableHead>Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      className="text-center py-10 text-gray-500"
                    >
                      No data
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
