import { useEffect, useState } from "react";
import { DisplayLive } from "./DisplayLive";
const Live = () => {
  const [canvas, setCanvas] = useState(<></>);
  const [canvas2, setCanvas2] = useState(<></>);
  const [slider, setSlider] = useState(<></>);
  const [toggle, setToggle] = useState(false);
  const [toggled, setToggled] = useState(false);
  const feed = DisplayLive();
  const [stream, setStream] = useState(null);
  const [canvasInterval, setCanvasInterval] = useState(null);

  useEffect(() => {
    console.log("Toggle");
    if (toggle == true) {
      setToggled(true);
      setCanvas(<canvas className="hidden" id="canvas" />);
      setCanvas2(<canvas id="canvas2" />);
      setSlider(
        <>
          <input type="range" min="1" max="10" id="slider" />
          <p id="slider-value">5px</p>
        </>
      );
      //@ts-ignore
      let values = feed[0]()
        //@ts-ignore
        .then((value: any) => {
          setCanvasInterval(value[0]);
          setStream(value[1]);
          console.log(canvasInterval, stream);
        })
        .catch((error: any) => console.log(error));
      // console.log(feed[0]());
      // canvasInterval = values[0];
      // stream = values[1];
    } else {
      setCanvas(<></>);
      setCanvas2(<></>);
      setSlider(<></>);
      if (toggled == true) {
        feed[1](canvasInterval, stream);
      }
    }
  }, [toggle]);
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <p className="font-bold text-gray-500">Toggle to turn live On/Off</p>
      <input
        type="checkbox"
        className="toggle toggle-primary"
        id="toggle"
        onClick={() => setToggle(!toggle)}
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

export default Live;
