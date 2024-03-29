import React from "react";
import Lottie from "lottie-react";

export default function LottieAnimation({ lotti , data}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} animationData={data}/>
    </div>
  );
}