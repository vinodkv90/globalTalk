import { useNextFetch } from "@/customHooks/useNextFetch";
import Homepage from "@/pages/Homepage";

export default async function Home() {
  const data = await useNextFetch('/api/home', )
  const parsedData = JSON.parse(data)
  return (
    <Homepage parsedData={parsedData} />
  );
}
