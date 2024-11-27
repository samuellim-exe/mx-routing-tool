import ChannelsTable from "@/components/ChannelsTable";
import { Input } from "@/components/ui/input";
// import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";

const channels = []

function seedChannels(chCount) {
  for (let i = 0; i < (chCount || 32); i++) {
    channels.push({
      id: i + 1,
      name: `Channel ${i + 1}`,
      source: `Local In ${i + 1}`,
    });
  }

}

seedChannels(32);

console.log(channels)

export default function Home() {
  return (
   <div>
    <ChannelsTable channels={channels} />
   </div>
  );
}
