import React, { useEffect } from "react";
import "@dotlottie/player-component";

const LottiePlayer = ({
  file,
  height,
  width,
  autoplay = true,
  loop = true,
}: any) => {
  // useEffect(() => {
  //   import("@dotlottie/player-component");
  // }, []);
  return (
    <>
      <dotlottie-player
        src={file}
        autoplay={autoplay}
        loop={loop}
        style={{ height: height, width: width }}
      />
    </>
  );
};

export default LottiePlayer;
