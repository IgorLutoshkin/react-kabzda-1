import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.head}>
      <img
        className={style.logo}
        src="https://avatars.mds.yandex.net/i?id=8e1aedaa38797584b4eb74dff9acca33_l-8348888-images-thumbs&n=13"
        alt=""
      />
    </header>
  );
};

export default Header;
