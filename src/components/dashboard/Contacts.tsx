import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

interface Conatact {
  id: number;
  name: string;
  number: string | number;
  totalContact: number;
}

export default function ContactsPage() {
  const [contacts] = useState<Conatact[]>([]);
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedContacts(contacts.map((contact) => contact.id));
    } else {
      setSelectedContacts([]);
    }
  };

  const handleSelectContact = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedContacts([...selectedContacts, id]);
    } else {
      setSelectedContacts(
        selectedContacts.filter((contactId) => contactId !== id)
      );
    }
  };

  return (
    <main className="flex-1 p-8 overflow-auto">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Contacts</h3>
          <div className="flex justify-end space-x-2 mb-4">
            <Button>Replace All</Button>
            <Button>Import All</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox
                        checked={selectedContacts.length === contacts.length}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>Sr No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Total Contact</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        No data
                      </TableCell>
                    </TableRow>
                  ) : (
                    contacts.map((contact, index) => (
                      <TableRow key={contact.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedContacts.includes(contact.id)}
                            onCheckedChange={(checked) =>
                              handleSelectContact(
                                contact.id,
                                checked.toString() === "true"
                              )
                            }
                          />
                        </TableCell>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>{contact.totalContact}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sr No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="h-24 text-center">
                        No data
                      </TableCell>
                    </TableRow>
                  ) : (
                    contacts.map((contact, index) => (
                      <TableRow key={contact.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>{contact.number}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      <footer className="mt-8 text-center text-sm text-gray-500">
        Copyright © 2024 Designed & Developed By The Social Era
      </footer>
    </main>
  );
}
