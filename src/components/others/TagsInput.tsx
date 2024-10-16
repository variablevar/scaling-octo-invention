import { useState } from "react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Autocomplete = () => {
  const allOptions = ["Apple", "Banana", "Grapes", "Orange", "Pineapple"];
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = allOptions.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
    setInputValue(""); // Clear input after selection
  };

  const handleRemove = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {selectedItems.map((item) => (
          <Badge key={item} className="flex items-center">
            {item}
            <button
              className="ml-2 text-red-500"
              onClick={() => handleRemove(item)}
            >
              x
            </button>
          </Badge>
        ))}
      </div>

      <Input
        placeholder="Type to search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mb-2 w-full"
      />

      {inputValue && (
        <Select onValueChange={handleSelect}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {filteredOptions.length ? (
              filteredOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))
            ) : (
              <p className="p-2">No options found</p>
            )}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default Autocomplete;
