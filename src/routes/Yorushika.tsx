import Main from "../components/Main";
import { Playlist } from "../components/Playlist";

export default function Yorushika() {
  const SpecifiedVideo = Playlist[0];
  return (
    <Main
      showbutton={false}
      VttLyrics={SpecifiedVideo.Subtitles}
      Lyrics="yorushikaLyrics"
      id="yorushika"
      Poster={SpecifiedVideo.Thumbnail}
      Description={SpecifiedVideo.Description}
    />
  );
}
