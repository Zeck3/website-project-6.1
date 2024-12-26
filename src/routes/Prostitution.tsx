import Main from "../components/Main";
import { Playlist } from "../components/Playlist";

export default function Prostitution() {
  const SpecifiedVideo = Playlist[3];
  return (
    <Main
      showbutton={true}
      VttLyrics={SpecifiedVideo.Subtitles}
      Lyrics="prostitutionLyrics"
      id="prostitution"
      Poster={SpecifiedVideo.Thumbnail}
      MusicVideo={SpecifiedVideo.MusicVideo}
      Title={SpecifiedVideo.Title}
      Description={SpecifiedVideo.Description}
    />
  );
}
