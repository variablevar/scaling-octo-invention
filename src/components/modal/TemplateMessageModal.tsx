import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Input } from "../ui/input";

function TemplateMessageModal({
  isModalOpen,
  setIsModalOpen,
  handleCreateMessage,
}) {
  const [newMessage, setNewMessage] = useState({
    enabled: true,
    name: "",
    messageType: "Text",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked) => {
    setNewMessage((prev) => ({ ...prev, enabled: checked }));
    console.log(newMessage);
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Template Message</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="enable" className="text-right">
              Enable
            </Label>
            <Switch
              id="enable"
              checked={newMessage.enabled}
              onCheckedChange={handleSwitchChange}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Template Name
            </Label>
            <Input
              id="name"
              name="name"
              value={newMessage.name}
              onChange={(event) => handleInputChange(event)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="messageType" className="text-right">
              Message Type
            </Label>

            <Select
              //   id="messageType"
              //   className="col-span-3"
              name="messageType"
              value={newMessage.messageType}
              onValueChange={(value) =>
                handleInputChange({ target: { name: "messageType", value } })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Message Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Text">Text</SelectItem>
                  <SelectItem value="Text With Media">
                    Text With Media
                  </SelectItem>
                  <SelectItem value="Button">Button</SelectItem>
                  <SelectItem value="Button With Media">
                    Button With Media
                  </SelectItem>
                  <SelectItem value="List/Menu">List/Menu</SelectItem>
                  <SelectItem value="List/Menu With Media">
                    List/Menu With Media
                  </SelectItem>
                  <SelectItem value="Poll">Poll</SelectItem>
                  <SelectItem value="Poll With Media">
                    Poll With Media
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={newMessage.message}
              onChange={handleInputChange}
              className="col-span-3"
              rows={6}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleCreateMessage(newMessage)}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default TemplateMessageModal;
