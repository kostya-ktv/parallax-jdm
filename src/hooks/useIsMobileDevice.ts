import { useEffect, useState } from "react";

const useIsMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      const isMobile =
        /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobile);
    };

    checkMobileDevice();
  }, []);
  return { isMobile };
};
export default useIsMobileDevice;
