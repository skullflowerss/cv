import { useEffect, useState } from "react";
import style from "./Main.module.scss";

export const Main = ({ images, children }) => {
  const [bgImg, setBgImg] = useState("");

  useEffect(() => {
    const randomBG = Math.floor(Math.random() * images.length);
    const img = images[randomBG].fields.file.url;
    setBgImg(img);
  }, [images]);

  return (
    <main className={style.main}>
      <div
        className={style.background_holder}
        style={{ backgroundImage: `url("${bgImg}")` }}
      >
        {children}
      </div>
    </main>
  );
};
