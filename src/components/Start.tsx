import vidURL from "./demo.mp4";
const Start = () => {
  return (
    <>
      <h2 className="text-xl my-4 ">Transform your media into ASCII!</h2>
      <div className="flex flex-row mx-4 content-center">
        <div className="flex flex-col w-1/4 justify-top glass text-gray-400 rounded-md text-left shadow-xl">
          <p className="mb-5 mx-3">
            1. choose which mode you would like to transform..
          </p>
          <p className="mb-5 mx-3">
            2. Follow the easy instructions in the media tab..
          </p>
          <p className="mx-3">
            3. Sit back, relax, and enjoy your new ASCII art! It's as easy as
            1..2..3!
          </p>
        </div>

        <div className="flex-row flex justify-center items-center h-full w-3/4">
          <video
            autoPlay={true}
            loop={true}
            src = {vidURL}
          ></video>
          <div />
        </div>
      </div>
    </>
  );
};

export default Start;
