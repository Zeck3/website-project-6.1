import Main from "../components/Main";
import { Playlist } from "../components/Playlist";

export default function About() {
  const SpecifiedVideo = Playlist[6];
  return (
    <Main
      showbutton={false}
      VttLyrics={SpecifiedVideo.Subtitles}
      Lyrics="aboutLyrics"
      id="about"
      Poster={SpecifiedVideo.Thumbnail}
      Description={SpecifiedVideo.Description}
    />
  );
}
