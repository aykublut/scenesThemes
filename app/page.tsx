import { ScrollAreaDemo } from "@/components/HomePageComponents/ScrollAreaDemo";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/movies`, { cache: "no-store" });
  const movies = await res.json();

  return (
    <div className="flex relative flex-col justify-start items-center w-full">
      <ScrollAreaDemo movies={movies} />
    </div>
  );
}
