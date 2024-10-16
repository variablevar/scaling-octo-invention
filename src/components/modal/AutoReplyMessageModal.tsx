import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  Bold,
  Code,
  Italic,
  List,
  Quote,
  Smile,
  Strikethrough,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type MessageType =
  | "Text"
  | "Text With Media"
  | "Poll"
  | "Poll With Media"
  | "Button"
  | "Button With Media"
  | "List/Menu"
  | "List/Menu With Media";
type ButtonType = "quick_reply" | "url" | "phone";

interface PollOption {
  id: string;
  text: string;
}

interface MenuItem {
  id: string;
  title: string;
  description: string;
}

interface ButtonItem {
  id: string;
  type: ButtonType;
  title: string;
}

export default function AutoReplyMessageModal({
  headlineText,
  handleCreateMessage,
  isModalOpen,
  setIsModalOpen,
}) {
  const [templateName, setTemplateName] = useState("");
  const [messageType, setMessageType] =
    useState<MessageType>("Text With Media");
  const [instances, setInstances] = useState("");
  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState<PollOption[]>([
    { id: "1", text: "" },
    { id: "2", text: "" },
  ]);
  const [allowMultipleAnswers, setAllowMultipleAnswers] = useState(false);
  const [buttons, setButtons] = useState<ButtonItem[]>([]);
  const [menuTitle, setMenuTitle] = useState("");
  const [menuMiddleTitle, setMenuMiddleTitle] = useState("");
  const [menuFooterTitle, setMenuFooterTitle] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const insertFormatting = (startChar: string, endChar: string = startChar) => {
    const textarea = document.getElementById("message") as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = message.substring(start, end);
    const newText =
      message.substring(0, start) +
      startChar +
      selectedText +
      endChar +
      message.substring(end);
    setMessage(newText);
    textarea.focus();
    textarea.setSelectionRange(
      start + startChar.length,
      end + startChar.length
    );
  };

  const handleEmojiSelect = (emoji: { native: string }) => {
    setMessage(message + emoji.native);
  };

  const addPollOption = () => {
    setPollOptions([...pollOptions, { id: Date.now().toString(), text: "" }]);
  };

  const removePollOption = (id: string) => {
    setPollOptions(pollOptions.filter((option) => option.id !== id));
  };

  const updatePollOption = (id: string, text: string) => {
    setPollOptions(
      pollOptions.map((option) =>
        option.id === id ? { ...option, text } : option
      )
    );
  };

  const addButton = () => {
    setButtons([
      ...buttons,
      { id: Date.now().toString(), type: "quick_reply", title: "" },
    ]);
  };

  const removeButton = (id: string) => {
    setButtons(buttons.filter((button) => button.id !== id));
  };

  const updateButton = (id: string, field: "type" | "title", value: string) => {
    setButtons(
      buttons.map((button) =>
        button.id === id ? { ...button, [field]: value } : button
      )
    );
  };

  const addMenuItem = () => {
    setMenuItems([
      ...menuItems,
      { id: Date.now().toString(), title: "", description: "" },
    ]);
  };

  const removeMenuItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  const updateMenuItem = (
    id: string,
    field: "title" | "description",
    value: string
  ) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const renderMessageTypeFields = () => {
    switch (messageType) {
      case "Text":
        return (
          <>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("*")}
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("_")}
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("~")}
                >
                  <Strikethrough className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("`")}
                >
                  <Code className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("- ")}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("> ")}
                >
                  <Quote className="h-4 w-4" />
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                  </PopoverContent>
                </Popover>
              </div>
              <Select value={selectedColumn} onValueChange={setSelectedColumn}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">One Column</SelectItem>
                  <SelectItem value="2">Two Columns</SelectItem>
                  <SelectItem value="3">Three Columns</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                id="message"
                placeholder="Enter your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[200px]"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Preview:</h3>
                <div
                  className={`p-4 border rounded-md ${
                    selectedColumn === "2"
                      ? "columns-2"
                      : selectedColumn === "3"
                      ? "columns-3"
                      : ""
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: message
                      .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                      .replace(/_(.*?)_/g, "<em>$1</em>")
                      .replace(/~(.*?)~/g, "<del>$1</del>")
                      .replace(/`(.*?)`/g, "<code>$1</code>")
                      .replace(/^- (.*)$/gm, "<li>$1</li>")
                      .replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>")
                      .replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
          </>
        );
      case "Poll With Media":
        return (
          <>
            <div className="space-y-4">
              <Input
                placeholder="Poll question"
                value={pollQuestion}
                onChange={(e) => setPollQuestion(e.target.value)}
              />
              {pollOptions.map((option, index) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Input
                    placeholder={`Option ${index + 1}`}
                    value={option.text}
                    onChange={(e) =>
                      updatePollOption(option.id, e.target.value)
                    }
                  />
                  {index > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removePollOption(option.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="outline" onClick={addPollOption}>
                Add Option
              </Button>
              <div className="flex items-center space-x-2">
                <Switch
                  id="allow-multiple"
                  checked={allowMultipleAnswers}
                  onCheckedChange={setAllowMultipleAnswers}
                />
                <Label htmlFor="allow-multiple">Allow multiple answers</Label>
              </div>
            </div>
            <Input type="file" id="media" className="mt-4" />
            <Label
              htmlFor="media"
              className="mt-1 text-sm text-muted-foreground"
            >
              Upload media
            </Label>
          </>
        );
      case "List/Menu With Media":
        return (
          <>
            <div className="space-y-4">
              <Input
                placeholder="Menu Title"
                value={menuTitle}
                onChange={(e) => setMenuTitle(e.target.value)}
              />
              <Input
                placeholder="Menu Middle Title"
                value={menuMiddleTitle}
                onChange={(e) => setMenuMiddleTitle(e.target.value)}
              />
              <Input
                placeholder="Footer Title"
                value={menuFooterTitle}
                onChange={(e) => setMenuFooterTitle(e.target.value)}
              />
              {menuItems.map((item, index) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>Menu Item {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Input
                      placeholder="Title"
                      value={item.title}
                      onChange={(e) =>
                        updateMenuItem(item.id, "title", e.target.value)
                      }
                    />
                    <Input
                      placeholder="Description (Optional)"
                      value={item.description}
                      onChange={(e) =>
                        updateMenuItem(item.id, "description", e.target.value)
                      }
                    />
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="destructive"
                      onClick={() => removeMenuItem(item.id)}
                    >
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              <Button variant="outline" onClick={addMenuItem}>
                Add Menu Item
              </Button>
            </div>
            <Input type="file" id="media" className="mt-4" />
            <Label
              htmlFor="media"
              className="mt-1 text-sm text-muted-foreground"
            >
              Upload media
            </Label>
          </>
        );
      case "Button With Media":
        return (
          <>
            <div className="space-y-4">
              <Textarea
                placeholder="Enter your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[100px]"
              />
              {buttons.map((button, index) => (
                <Card key={button.id}>
                  <CardHeader>
                    <CardTitle>Button {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Select
                      value={button.type}
                      onValueChange={(value) =>
                        updateButton(button.id, "type", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Button Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quick_reply">
                          Quick Reply Button
                        </SelectItem>
                        <SelectItem value="url">URL Button</SelectItem>
                        <SelectItem value="phone">Phone Button</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Button Title"
                      value={button.title}
                      onChange={(e) =>
                        updateButton(button.id, "title", e.target.value)
                      }
                    />
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="destructive"
                      onClick={() => removeButton(button.id)}
                    >
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              <Button variant="outline" onClick={addButton}>
                Add Button
              </Button>
            </div>
            <Input type="file" id="media" className="mt-4" />
            <Label
              htmlFor="media"
              className="mt-1 text-sm text-muted-foreground"
            >
              Upload media
            </Label>
          </>
        );
      case "Text With Media":
        return (
          <>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("*")}
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("_")}
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("~")}
                >
                  <Strikethrough className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("`")}
                >
                  <Code className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("- ")}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => insertFormatting("> ")}
                >
                  <Quote className="h-4 w-4" />
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                  </PopoverContent>
                </Popover>
              </div>
              <Select value={selectedColumn} onValueChange={setSelectedColumn}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">One Column</SelectItem>
                  <SelectItem value="2">Two Columns</SelectItem>
                  <SelectItem value="3">Three Columns</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                id="message"
                placeholder="Enter your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[200px]"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Preview:</h3>
                <div
                  className={`p-4 border rounded-md ${
                    selectedColumn === "2"
                      ? "columns-2"
                      : selectedColumn === "3"
                      ? "columns-3"
                      : ""
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: message
                      .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                      .replace(/_(.*?)_/g, "<em>$1</em>")
                      .replace(/~(.*?)~/g, "<del>$1</del>")
                      .replace(/`(.*?)`/g, "<code>$1</code>")
                      .replace(/^- (.*)$/gm, "<li>$1</li>")
                      .replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>")
                      .replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            </div>
            <Input type="file" id="media" className="mt-4" />
            <Label
              htmlFor="media"
              className="mt-1 text-sm text-muted-foreground"
            >
              Upload media
            </Label>
          </>
        );
      case "Poll":
        return (
          <div className="space-y-4">
            <Input
              placeholder="Poll question"
              value={pollQuestion}
              onChange={(e) => setPollQuestion(e.target.value)}
            />
            {pollOptions.map((option, index) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={option.text}
                  onChange={(e) => updatePollOption(option.id, e.target.value)}
                />
                {index > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removePollOption(option.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline" onClick={addPollOption}>
              Add Option
            </Button>
            <div className="flex items-center space-x-2">
              <Switch
                id="allow-multiple"
                checked={allowMultipleAnswers}
                onCheckedChange={setAllowMultipleAnswers}
              />
              <Label htmlFor="allow-multiple">Allow multiple answers</Label>
            </div>
          </div>
        );
      case "Button":
        return (
          <div className="space-y-4">
            <Textarea
              placeholder="Enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
            {buttons.map((button, index) => (
              <Card key={button.id}>
                <CardHeader>
                  <CardTitle>Button {index + 1}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Select
                    value={button.type}
                    onValueChange={(value) =>
                      updateButton(button.id, "type", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Button Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quick_reply">
                        Quick Reply Button
                      </SelectItem>
                      <SelectItem value="url">URL Button</SelectItem>
                      <SelectItem value="phone">Phone Button</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Button Title"
                    value={button.title}
                    onChange={(e) =>
                      updateButton(button.id, "title", e.target.value)
                    }
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    variant="destructive"
                    onClick={() => removeButton(button.id)}
                  >
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Button variant="outline" onClick={addButton}>
              Add Button
            </Button>
          </div>
        );
      case "List/Menu":
        return (
          <div className="space-y-4">
            <Input
              placeholder="Menu Title"
              value={menuTitle}
              onChange={(e) => setMenuTitle(e.target.value)}
            />
            <Input
              placeholder="Menu Middle Title"
              value={menuMiddleTitle}
              onChange={(e) => setMenuMiddleTitle(e.target.value)}
            />
            <Input
              placeholder="Footer Title"
              value={menuFooterTitle}
              onChange={(e) => setMenuFooterTitle(e.target.value)}
            />
            {menuItems.map((item, index) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle>Menu Item {index + 1}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Input
                    placeholder="Title"
                    value={item.title}
                    onChange={(e) =>
                      updateMenuItem(item.id, "title", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Description (Optional)"
                    value={item.description}
                    onChange={(e) =>
                      updateMenuItem(item.id, "description", e.target.value)
                    }
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    variant="destructive"
                    onClick={() => removeMenuItem(item.id)}
                  >
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Button variant="outline" onClick={addMenuItem}>
              Add Menu Item
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{headlineText}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
              id="auto-reply-enabled"
            />
            <Label htmlFor="auto-reply-enabled">Enable</Label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="instances">Instances</Label>
              <Input
                id="instances"
                value={instances}
                onChange={(e) => setInstances(e.target.value)}
                placeholder="e.g., home"
              />
            </div>
            <div>
              <Label htmlFor="keyword">Keyword</Label>
              <Input
                id="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g., hello"
              />
            </div>
          </div>
          <div className="">
            <Label htmlFor="template">Template Name</Label>
            <Input
              id="template"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="message-type">Message Type</Label>
            <Select
              value={messageType}
              onValueChange={(value) => setMessageType(value as MessageType)}
            >
              <SelectTrigger id="message-type">
                <SelectValue placeholder="Select message type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Text">Text</SelectItem>
                <SelectItem value="Text With Media">Text With Media</SelectItem>
                <SelectItem value="Button">Button</SelectItem>
                <SelectItem value="Button With Media">
                  Button With Media
                </SelectItem>
                <SelectItem value="List/Menu">List/Menu</SelectItem>
                <SelectItem value="List/Menu With Media">
                  List/Menu With Media
                </SelectItem>
                <SelectItem value="Poll">Poll</SelectItem>
                <SelectItem value="Poll With Media">Poll With Media</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {renderMessageTypeFields()}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() =>
              handleCreateMessage({
                enabled: true,
                keyword,
                instance: instances,
                messageType,
                name: templateName,
                message,
                preview: true,
              })
            }
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
