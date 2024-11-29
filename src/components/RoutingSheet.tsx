import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RoutingSheet = () => {
  const initialChannels = Array.from({ length: 32 }, (_, i) => ({ name: `Channel ${i + 1}`, inputType: "Local In", inputNumber: `${i + 1}` }));
  const [channels, setChannels] = useState(initialChannels);

  const handleInputChange = (index: number, field: string, value: string) => {
    setChannels(prevChannels => {
      const newChannels = [...prevChannels];
      newChannels[index] = { ...newChannels[index], [field]: value };
      return newChannels;
    });
  };

  const exportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      channels.map(channel => `${channel.name},${channel.inputType} ${channel.inputNumber}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "routing_sheet.csv");
    document.body.appendChild(link);
    link.click();
  };

  const logValues = () => {
    console.log(channels);
  };

  return (
    <div className="routing-sheet">
      <h1>MX Routing Tool</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Channel Name</TableHead>
            <TableHead>Input Type</TableHead>
            <TableHead>Input Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {channels.map((channel, index) => (
            <TableRow key={index}>
              <TableCell>
                <Input
                  value={channel.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  placeholder="Channel Name"
                />
              </TableCell>
              <TableCell>
                <Select
                  value={channel.inputType}
                  onValueChange={(value) =>
                    handleInputChange(index, "inputType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Input Type"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Local In">Local In</SelectItem>
                    <SelectItem value="AES50 A">AES50 A</SelectItem>
                    <SelectItem value="AES50 B">AES50 B</SelectItem>
                    <SelectItem value="Card">Card</SelectItem>
                    <SelectItem value="Aux In">Aux In</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Select
                  value={channel.inputNumber}
                  onValueChange={(value) =>
                    handleInputChange(index, "inputNumber", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Input Number"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: channel.inputType === "Aux In" ? 6 : 32 }, (_, i) => (
                      <SelectItem key={`${channel.inputType} ${i + 1}`} value={`${i + 1}`}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={exportToCSV}>Export to CSV</Button>
      <Button onClick={logValues}>Log Values</Button>
    </div>
  );
};

export default RoutingSheet;
