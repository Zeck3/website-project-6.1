type DescriptionProps = {
  Lyrics: string | null;
  Title: string | null;
  Description: string | null;
  children: React.ReactNode;
};

export default function Description(props: DescriptionProps) {
  return (
    <div className="flex justify-end w-full mx-20">
      <div className="flex flex-col items-start justify-center w-1/2 pr-16">
        <div
          id={props.Lyrics ?? undefined}
          className="flex items-center text-2xl text-left drop-shadow-xl text-[#F5F5F5]"
        ></div>
      </div>
      <div className="flex flex-col items-end justify-end w-1/2">
        <div className="flex flex-row items-center justify-center gap-4">
          {props.children}
          <h1 className="flex items-center text-4xl text-right drop-shadow-xl">
            {props.Title}
          </h1>
        </div>
        <p className="text-xs text-right">{props.Description}</p>
      </div>
    </div>
  );
}
