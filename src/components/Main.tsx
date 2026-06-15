import NavBar from "./NavBar";
import Description from "./Description";
import MusicVideo from "./MusicVideo";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";

type MainProps = {
  showbutton: boolean;
  VttLyrics: string | null;
  Lyrics: string | null;
  id: string;
  Poster: string;
  MusicVideo?: string | null;
  Title?: string | null;
  Description: string | null;
};

export default function Main(props: MainProps) {
  const [isplaying, setIsplaying] = useState(false);

  interface PlayingProps {
    isplaying: boolean;
  }

  const Playing: React.FC<PlayingProps> = ({ isplaying }) => {
    return (
      <span className="text-7xl drop-shadow-xl">
        {isplaying ? <FaPause /> : <FaPlay />}
      </span>
    );
  };

  const handleClick = () => {
    const videoElement = document.getElementById(
      props.id,
    ) as HTMLMediaElement | null;

    if (videoElement) {
      if (isplaying) {
        setIsplaying(false);
        videoElement.pause();
      } else {
        setIsplaying(true);
        videoElement.play();
      }
    } else {
      console.warn(`Element with id '${props.id}' not found.`);
    }
  };

  const main = useCallback(async () => {
    if (!props.Lyrics || !props.VttLyrics) return;

    const dom = {
      lyric: document.getElementById(props.Lyrics) as HTMLElement | null,
      player: document.getElementById(props.id) as HTMLMediaElement | null,
    };

    if (!dom.player || !dom.lyric) return;

    if (typeof window === "undefined") return;

    try {
      const res = await fetch(props.VttLyrics);
      if (!res.ok) throw new Error("Failed to fetch VTT");

      const vtt = await res.text();
      const lyrics = parseVtt(vtt);

      const update = () => {
        console.log("timeupdate firing", dom.player?.currentTime);
        const time = dom.player!.currentTime;
        const index = syncLyric(lyrics, time);
        console.log("sync index:", index);

        dom.lyric!.textContent = index == null ? "" : lyrics[index].text;
      };

      dom.player.addEventListener("timeupdate", update);

      dom.player.onended = () => {
        dom.player!.load();
        setIsplaying(false);
      };

      const cleanup = () => {
        dom.player?.removeEventListener("timeupdate", update);
      };

      return cleanup;
    } catch (e) {
      console.error(e);
    }
  }, [props.id, props.Lyrics, props.VttLyrics]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    main().then((fn) => {
      cleanup = fn;
    });
    return () => {
      cleanup?.();
    };
  }, [main]);

  return (
    <main className="flex relative flex-col justify-between h-screen bg-center bg-cover bg-drop-shadow">
      <MusicVideo
        id={props.id}
        Poster={props.Poster}
        MusicVideo={props.MusicVideo ?? null}
      />
      <header className="relative flex w-screen h-auto py-10">
        <div className="flex w-full mx-20">
          <div className="flex flex-row w-full gap-20">
            <div className="flex items-center">
              <Link className="text-5xl" to="/">
                ヨルシカ
              </Link>
            </div>
            <NavBar />
          </div>
        </div>
      </header>
      <section className="relative flex w-screen h-auto py-10">
        <Description
          Lyrics={props.Lyrics}
          Title={props.Title ?? null}
          Description={props.Description}
        >
          <button
            onClick={handleClick}
            style={{ display: props.showbutton ? "flex" : "none" }}
          >
            <Playing isplaying={isplaying} />
          </button>
        </Description>
      </section>
    </main>
  );
}

type Subtitle = {
  startTime: number;
  endTime: number;
  text: string;
};

const parseVtt = (vtt: string): Subtitle[] => {
  const regex =
    /^(?<start>\d{2}:\d{2}:\d{2}.\d{3}?) --> (?<end>\d{2}:\d{2}:\d{2}.\d{3}?)\r\n(?<text>.*)$/gm;
  const matches = [...vtt.matchAll(regex)];
  const output: Subtitle[] = [];

  matches.forEach((match) => {
    const startTime = parseTime(match.groups?.start || "");
    const endTime = parseTime(match.groups?.end || "");
    const text = match.groups?.text.trim() || "";

    output.push({
      startTime,
      endTime,
      text,
    });
  });

  function parseTime(time: string): number {
    const timeComponents = time.split(":").map(parseFloat);
    const hoursToSeconds = timeComponents[0] * 3600;
    const minutesToSeconds = timeComponents[1] * 60;
    const seconds = timeComponents[2];
    return hoursToSeconds + minutesToSeconds + seconds;
  }

  return output;
};

const syncLyric = (lyrics: Subtitle[], time: number): number | null => {
  console.log("parsed lyrics:", lyrics.length);
  const validLyrics = lyrics.filter(
    (lyric) => time >= lyric.startTime && time <= lyric.endTime,
  );

  if (validLyrics.length === 0) {
    return null;
  }

  const closestLyric = validLyrics.reduce((prevLyric, currentLyric) => {
    const prevTimeDifference = Math.abs(prevLyric.startTime - time);
    const currentTimeDifference = Math.abs(currentLyric.startTime - time);
    return currentTimeDifference < prevTimeDifference
      ? currentLyric
      : prevLyric;
  });

  return lyrics.indexOf(closestLyric);
};
