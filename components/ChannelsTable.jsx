import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "./ui/table";

export default function ChannelsTable({ channels }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Source</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {channels.map((channel) => (
          <TableRow key={channel.id}>
            <TableCell>{channel.id}</TableCell>
            <TableCell>{channel.name}</TableCell>
            <TableCell>{channel.source}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
