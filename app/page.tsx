import { ScrollAreaDemo } from "@/components/HomePageComponents/ScrollAreaDemo";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store", // her istekte güncel veriyi çekmek için
  });
  const movies = await res.json();
  return (
    <div className="flex relative flex-col justify-start items-center w-full">
      <ScrollAreaDemo movies={movies} />
    </div>
  );
}
