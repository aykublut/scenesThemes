// app/api/movies/route.ts
import { NextRequest, NextResponse } from "next/server";

// Örnek film verisi
const movies = [
  {
    id: 1,
    movieName: "John Wick",
    avatar: "avatars/johnWick.png",
    song: [
      {
        id: 1,
        url: "songs/Excomunicado.mp3",
        name: "Excomuniacado",
        songPhoto: "songsPhoto/excomminado.png",
      },
      {
        id: 2,
        url: "songs/plasticMusic.mp3",
        name: "Plastic Heart",
        songPhoto: "songsPhoto/plastic.png",
      },
      {
        id: 3,
        url: "songs/parisMusic.mp3",
        name: "Arc de Triomphe",
        songPhoto: "songsPhoto/paris.png",
      },
      {
        id: 4,
        url: "songs/story.mp3",
        name: "Story of Wick",
        songPhoto: "songsPhoto/story.png",
      },
    ],
    clip: [
      {
        id: 1,
        url: "clips/paris.mp4",
        name: "Arc de Triomphe",
        clipPhoto: "clipsPhoto/arch.png",
      },
      {
        id: 2,
        url: "clips/wick2.mp4",
        name: "Pencil Kill",
        clipPhoto: "clipsPhoto/pencil.png",
      },
      {
        id: 3,
        url: "clips/wick3.mp4",
        name: "Excomuniacado",
        clipPhoto: "clipsPhoto/exco.png",
      },
      {
        id: 4,
        url: "clips/museum.mp4",
        name: "Museum Fight",
        clipPhoto: "clipsPhoto/museum.png",
      },
    ],
  },
  {
    id: 2,
    movieName: "Extraction",
    avatar: "avatars/extraction.png",
    song: [
      {
        id: 1,
        url: "songs/Prelude.mp3",
        name: "Prelude",
        songPhoto: "songsPhoto/ext3.png",
      },
      {
        id: 2,
        url: "songs/carChase.mp3",
        name: "Car Chase",
        songPhoto: "songsPhoto/ext3.png",
      },
      {
        id: 3,
        url: "songs/codeRed.mp3",
        name: "Code Red",
        songPhoto: "songsPhoto/ext2.png",
      },
    ],
    clip: [
      {
        id: 1,
        url: "clips/firstFight.mp4",
        name: "First Fight",
        clipPhoto: "clipsPhoto/firstFight.png",
      },
      {
        id: 2,
        url: "clips/prisonRiot.mp4",
        name: "Prison Riot",
        clipPhoto: "clipsPhoto/prisonRiot.png",
      },
      {
        id: 3,
        url: "clips/movingTrain.mp4",
        name: "Moving Train",
        clipPhoto: "clipsPhoto/movingTrain.png",
      },
    ],
  },
  {
    id: 3,
    movieName: "The King's Man",
    avatar: "avatars/kingsman.png",
    song: [
      {
        id: 1,
        url: "songs/kingsman.mp3",
        name: "The King's Man",
        songPhoto: "songsPhoto/kingsman.png",
      },
    ],
    clip: [
      {
        id: 1,
        url: "clips/rasputin.mp4",
        name: "Rasputin Fight",
        clipPhoto: "clipsPhoto/kingsmanclip.png",
      },
    ],
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(movies);
}
