import { ClipLoader } from "react-spinners";

export default function Fallback() {
  return (
    <div className="absolute flex justify-center items-center w-screen top-0 h-screen z-30 bg-black transition-opacity duration-1000 ease-in-out">
      <ClipLoader color="#ffffff" size={50} />
    </div>
  );
}
