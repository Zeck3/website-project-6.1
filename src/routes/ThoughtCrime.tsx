import Main from "../components/Main";
import { Playlist } from "../components/Playlist";

export default function ThoughtCrime() {
  const SpecifiedVideo = Playlist[1];
  return (
    <Main
      showbutton={true}
      VttLyrics={SpecifiedVideo.Subtitles}
      Lyrics="thoughtcrimeLyrics"
      id="thoughtcrime"
      Poster={SpecifiedVideo.Thumbnail}
      MusicVideo={SpecifiedVideo.MusicVideo}
      Title={SpecifiedVideo.Title}
      Description={SpecifiedVideo.Description}
    />
  );
}
