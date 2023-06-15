import { useEffect, useState } from "react";

const useBackgroundAverageRgb = (src: string) => {
  const [background, setBackground] = useState<string>(
    "radial-gradient(rgba(0, 0, 0, 0.5), black 100%)"
  );

  const getAverageRgb = (src: string): Promise<Uint8ClampedArray> => {
    return new Promise((resolve) => {
      let context = document.createElement("canvas").getContext("2d");
      context!.imageSmoothingEnabled = true;

      let img = new Image();
      img.src = src;
      img.crossOrigin = "";

      img.onload = () => {
        context!.drawImage(img, 0, 0, 1, 1);
        resolve(context!.getImageData(0, 0, 1, 1).data.slice(0, 3));
      };
    });
  };

  useEffect(() => {
    getAverageRgb(src).then((res) =>
      setBackground(
        `radial-gradient(rgba(${res[0]}, ${res[1]}, ${res[2]}, 0.5), black 100%)`
      )
    );
  }, [src]);

  return background;
};

export default useBackgroundAverageRgb;
