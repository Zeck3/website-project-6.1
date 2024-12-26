type MusicVideoProps = {
  id: string;
  Poster: string;
  MusicVideo: string | null;
};

export default function MusicVideo(props: MusicVideoProps) {
  return (
    <video
      id={props.id}
      poster={props.Poster}
      src={props.MusicVideo || ""}
      className="absolute bottom-0 right-0 flex object-cover w-screen h-screen -z-10 ease-in"
      playsInline
    />
  );
}
