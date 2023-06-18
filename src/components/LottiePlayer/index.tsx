import Lottie from "lottie-react";
import solarSystemLottie from "../../../public/lottie-files/lottie-solar-system.json";

const LottiePlayer = ({ width, height }: any) => (
  <Lottie
    animationData={solarSystemLottie}
    style={{ height: height, width: width }}
  />
);

export default LottiePlayer;
