import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fallback from "./components/Fallback";

const Yorushika = lazy(() => import("./routes/Yorushika"));
const About = lazy(() => import("./routes/About"));
const ThoughtCrime = lazy(() => import("./routes/ThoughtCrime"));
const Plagiarism = lazy(() => import("./routes/Plagiarism"));
const Prostitution = lazy(() => import("./routes/Prostitution"));
const TheSettingSun = lazy(() => import("./routes/TheSettingSun"));
const ThatsWhyIGaveUpOnMusic = lazy(
  () => import("./routes/ThatsWhyIGaveUpOnMusic")
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Yorushika />} />
          <Route path="/about" element={<About />} />
          <Route path="/thoughtCrime" element={<ThoughtCrime />} />
          <Route path="/plagiarism" element={<Plagiarism />} />
          <Route path="/prostitution" element={<Prostitution />} />
          <Route path="/theSettingSun" element={<TheSettingSun />} />
          <Route
            path="/thatsWhyIGaveUpOnMusic"
            element={<ThatsWhyIGaveUpOnMusic />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
