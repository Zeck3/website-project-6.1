import Main from "../components/Main";
import { Playlist } from "../components/Playlist";

export default function ThatsWhyIGaveUpOnMusic() {
  const SpecifiedVideo = Playlist[5];
  return (
    <Main
      showbutton={true}
      VttLyrics={SpecifiedVideo.Subtitles}
      Lyrics="thatswhyigaveuponmusicLyrics"
      id="thatswhyigaveuponmusic"
      Poster={SpecifiedVideo.Thumbnail}
      MusicVideo={SpecifiedVideo.MusicVideo}
      Title={SpecifiedVideo.Title}
      Description={SpecifiedVideo.Description}
    />
  );
}
