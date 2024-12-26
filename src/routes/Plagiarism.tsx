import Main from "../components/Main";
import { Playlist } from "../components/Playlist";

export default function Plagiarism() {
  const SpecifiedVideo = Playlist[2];
  return (
    <Main
      showbutton={true}
      VttLyrics={SpecifiedVideo.Subtitles}
      Lyrics="plagiarismLyrics"
      id="plagiarism"
      Poster={SpecifiedVideo.Thumbnail}
      MusicVideo={SpecifiedVideo.MusicVideo}
      Title={SpecifiedVideo.Title}
      Description={SpecifiedVideo.Description}
    />
  );
}
