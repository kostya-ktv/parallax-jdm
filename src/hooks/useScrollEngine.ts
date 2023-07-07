import { useLayoutEffect } from "react";

const useScrollEngine = () => {
  useLayoutEffect(() => {
    let zSpacing = -4000;
    let lastPosition = zSpacing / 5;

    let frames = Array.from(document.getElementsByClassName("frame"));

    let zValues: any[] = [];
    window.scrollBy(1500, 0);
    window.onscroll = function () {
      let top = document.documentElement.scrollTop;
      let delta = lastPosition - top;

      lastPosition = top;
      frames.forEach((_, i) => {
        zValues.push(i * zSpacing + zSpacing);
        zValues[i] += delta * -5.5;

        let frame = frames[i];
        let transform = `translateZ(${zValues[i]}px)`;
        let opacity = zValues[i] < Math.abs(zSpacing) / 7.3 ? 1 : 0;
        frame.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}`
        );
      });
    };
    //some scroll on start
    window.scrollTo(0, 10);
  }, []);
};
export default useScrollEngine;
