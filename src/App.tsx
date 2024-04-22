import { useState } from "react";
import "./App.css";
import Image from "./components/Image";
import Live from "./components/Live";
import Video from "./components/Video";
import Start from "./components/Start";

function App() {
  const [mode, setMode] = useState(<Start />);

  return (
    <div className="bg-[url('./components/vid2.mp4')] h-screen w-screen bg-cover text-center text-white">
      <div className="bg-gradient-to-r from-white/50 to-fuchsia-500/50 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4 shadow-2xl">ASCII-Transform</h1>
        <div className="glass h-4/5 w-10/12 rounded-2xl">
          <section
            role="tablist"
            className="tabs tabs-bordered tabs-lg bg-white  rounded-2xl "
          >
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Home"
              onClick={() => setMode(<Start />)}
            />
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Image"
              onClick={() => setMode(<Image />)}
            />
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Live"
              onClick={() => setMode(<Live />)}
            />
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Video"
              onClick={() => setMode(<Video />)}
            />
          </section>
          {mode}
        </div>
      </div>
    </div>
  );
}

export default App;
