import { ScrollAreaDemo } from "@/components/HomePageComponents/ScrollAreaDemo";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`, {
    cache: "no-store",
  });
  const movies = await res.json();

  return (
    <div className="flex relative flex-col justify-start items-center w-full">
      <ScrollAreaDemo movies={movies} />
    </div>
  );
}
