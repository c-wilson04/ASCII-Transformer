import { useEffect, useState } from "react";
import { DisplayImage } from "./DisplayImage.js";
const Image = () => {
  const [file, setFile] = useState<File | null>(null);
  const [canvas, setCanvas] = useState(<></>);
  const [canvas2, setCanvas2] = useState(<></>);
  const [slider, setSlider] = useState(<></>);
  useEffect(() => {
    if (file != null) {
      DisplayImage(file);
    }
  }, [canvas]);
  useEffect(() => {
    if (file != null) {
      setCanvas(<canvas className="max-w-full h-auto hidden" id="canvas" />);
      setCanvas2(<canvas id="canvas2" />);
      setSlider(
        <>
          <input type="range" min="0" max="10" id="slider" defaultValue="5" />{" "}
          <p id="slider-value">5px</p>
        </>
      );
    }
  }, [file]);
  return (
    <div className="flex justify-center h-full items-center flex-col">
      <p className="font-bold text-gray-500">Choose a image file to convert</p>
      <input
        type="file"
        className="file-input file-input-bordered file-input-lg max-w-xs"
        onChange={(e) => {  
          if (!e.target.files){return}
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

export default Image;
