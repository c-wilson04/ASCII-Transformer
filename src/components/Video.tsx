import { useEffect, useState } from "react";
import { DisplayVideo } from "./DisplayVideo";
const Video = () => {
  const [file, setFile] = useState<File|null>(null);
  const [canvas, setCanvas] = useState(<></>);
  const [canvas2, setCanvas2] = useState(<></>);
  const [slider, setSlider] = useState(<></>);
  useEffect(() => {
    if (file != null) {
      DisplayVideo(file);
    }
  }, [canvas]);
  useEffect(() => {
    if (file != null) {
      setCanvas(<canvas className="hidden" id="canvas" />);
      setCanvas2(<canvas id="canvas2" />);
      setSlider(
        <>
          <input type="range" min="1" max="10" id="slider" />{" "}
          <p id="slider-value">5px</p>
        </>
      );
    }
  }, [file]);
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <p className="font-bold text-gray-500">Choose a video file to convert</p>
      <input
        type="file"
        className="file-input file-input-bordered file-input-lg max-w-xs"
        onChange={(e) => {
          if(!e.target.files){return}
          else{setFile(e.target.files[0])}
        }}
      />
      <div
        className="w-11/12 h-3/5 items-center justify-center flex"
        id="container1"
      >
        {canvas2}
      </div>
      {canvas}

      {slider}
    </div>
  );
};

export default Video;
