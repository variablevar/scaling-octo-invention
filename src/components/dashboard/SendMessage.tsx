import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SendMessagePage() {
  const [contacts] = useState([]);
  const [formData, setFormData] = useState({
    template: "",
    instance: "",
    messageType: "",
    excludeUnsubscribers: false,
    message: "",
    campaignName: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <main className="flex-1 p-8 overflow-auto">
      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"
        role="alert"
      >
        <p className="font-bold flex items-center">
          <AlertCircle className="mr-2" />
          Note
        </p>
        <p>Currently does not work with android devices.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Send Message</h3>
              <div className="space-x-2">
                <Button type="button" variant="outline">
                  Download Sample
                </Button>
                <Button type="button" variant="outline">
                  Manual Import
                </Button>
                <Button type="button">Import</Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="template">Template</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("template", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Templates</SelectLabel>
                      <SelectItem value="newMessage">New Message</SelectItem>
                      <SelectItem value="template2">Template 2</SelectItem>
                      {/* Add more options as needed */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="instance">Instance</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("instance", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Instance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Instances</SelectLabel>
                      <SelectItem value="instance1">Instance 1</SelectItem>
                      <SelectItem value="instance2">Instance 2</SelectItem>
                      {/* Add instance options */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="messageType">Message Type</Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("messageType", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Message Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Message Types</SelectLabel>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="image">Image</SelectItem>
                      {/* Add more message type options */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-4">
              <Label>Phone Numbers</Label>
              <div className="flex justify-between items-center mb-2">
                <Button type="button" variant="outline" size="sm">
                  Add Contact Row
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Sr No.</th>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Number</th>
                      <th className="px-4 py-2 border">Variable 1</th>
                      <th className="px-4 py-2 border">Variable 2</th>
                      <th className="px-4 py-2 border">Variable 3</th>
                      <th className="px-4 py-2 border">Variable 4</th>
                      <th className="px-4 py-2 border">Variable 5</th>
                      <th className="px-4 py-2 border">Variable 6</th>
                      <th className="px-4 py-2 border">Variable 7</th>
                      <th className="px-4 py-2 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.length === 0 && (
                      <tr>
                        <td colSpan={11} className="px-4 py-2 text-center">
                          No data
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <Checkbox
                id="excludeUnsubscribers"
                name="excludeUnsubscribers"
                checked={formData.excludeUnsubscribers}
                onCheckedChange={(checked) => {
                  setFormData((prev) => ({
                    ...prev,
                    excludeUnsubscribers: checked.toString() === "true",
                  }));
                }}
              />
              <Label htmlFor="excludeUnsubscribers" className="ml-2">
                Exclude Unsubscribers
              </Label>
            </div>

            <div className="mb-4">
              <div>
                <Label htmlFor="instance">Instance</Label>
                <Select
                  onValueChange={(value) => {
                    console.log(value);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Instance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Column</SelectLabel>
                      <SelectItem value="column">Use Column</SelectItem>
                      {/* Add instance options */}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="campaignName">Campaign Name</Label>
              <Input
                id="campaignName"
                name="campaignName"
                value={formData.campaignName}
                onChange={handleInputChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <footer className="mt-8 text-center text-sm text-gray-500">
        Copyright © 2024 Designed & Developed By The Social Era
      </footer>
    </main>
  );
}
