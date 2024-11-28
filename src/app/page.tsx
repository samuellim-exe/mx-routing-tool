import Image from "next/image";

type Channel = {
  id: number;
  name: string;
  source: Source;
}

type Source = {
  id: `in${number}` | `A${number}` | `B${number}` | `card${number}`;
  type: "Local In" | "AES50 A" | "AES50 B" | "Card";
  number: number;
}

const sources:Source[] = [];
const channels:Channel[] = [];

function createSources(count:number, type:Source["type"] = "AES50 A") {
  for (let i = 1; i < count+1; i++) {
    sources.push({
      id: `A${i}`, //TODO: make this dynamic
      type: type,
      number: i,
    });
  }
}

function createChannels(count:number) {
  for (let i = 1; i < count+1; i++) {
    channels.push({
      id: i,
      name: `Channel ${i}`,
      source: sources[i-1],
    });
  }
}

createSources(32);
createChannels(32);
console.log(channels);
console.log(sources)
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </div>
  );
}
