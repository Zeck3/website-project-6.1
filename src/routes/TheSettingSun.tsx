import Main from "../components/Main";
import { Playlist } from "../components/Playlist";

export default function TheSettingSun() {
  const SpecifiedVideo = Playlist[4];
  return (
    <Main
      showbutton={true}
      VttLyrics={SpecifiedVideo.Subtitles}
      Lyrics="thesettingsunLyrics"
      id="thesettingsun"
      Poster={SpecifiedVideo.Thumbnail}
      MusicVideo={SpecifiedVideo.MusicVideo}
      Title={SpecifiedVideo.Title}
      Description={SpecifiedVideo.Description}
    />
  );
}
