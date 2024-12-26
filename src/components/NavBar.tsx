import { useState } from "react";
import { Link } from "react-router-dom";

type LinksProps = {
  Visible: boolean;
};

function Links({ Visible }: LinksProps) {
  const visible = Visible;
  return (
    <div
      id="dropdown"
      className="absolute flex flex-col items-start w-full gap-5 top-full none transition-[opacity,transform] duration-300 ease-in-out drop-shadow-xl"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-10px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <Link to="/thoughtCrime" className="inline-block relative">
        <span className="onhover">Thought Crime</span>
      </Link>
      <Link to="/plagiarism" className="inline-block relative">
        <span className="onhover">Plagiarism</span>
      </Link>
      <Link to="/prostitution" className="inline-block relative">
        <span className="onhover">Prostitution</span>
      </Link>
      <Link to="/theSettingSun" className="inline-block relative">
        <span className="onhover">The Setting Sun</span>
      </Link>
      <Link to="/thatsWhyIGaveUpOnMusic" className="inline-block relative">
        <span className="onhover">That's Why I Gave Up On Music</span>
      </Link>
    </div>
  );
}

export default function NavBar() {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    if (dropdown) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  window.onclick = (event) => {
    const myBox = document.getElementById("dropdown");
    const myButton = document.getElementById("button");
    if (event.target !== myButton && myBox) {
      setDropdown(false);
    }
  };

  return (
    <nav className="flex flex-row">
      <ul className="flex flex-row gap-10">
        <li className="relative flex items-center justify-center">
          <button
            id="button"
            onClick={handleDropdown}
            className="relative flex flex-row items-center gap-3 text-xs text-center onhover drop-shadow-xl"
          >
            YORUSHIKA PLAYLIST
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={10}
              viewBox="0 0 6 2"
            >
              <path d="M 0 0 L 6 0 L 3 2 Z" fill="#F5F5F5" />
            </svg>
          </button>
          <Links Visible={dropdown} />
        </li>
        <li className="relative flex items-center justify-center">
          <Link
            className="relative flex text-xs text-center onhover drop-shadow-xl"
            to="/about"
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
