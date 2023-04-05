import React from "react";
import { ExperienceList, ProjectsList } from "..";
import style from "./ProfileContent.module.scss";
import Social from "../Social/Social";

export const ProfileContent = ({ name, bio, links }) => {
  console.log(links);

  const bioText = bio.content[0].content[0].value;
  return (
    <div className={style.profileContainer}>
      <h1 className={style.name}>{name}</h1>
      <br />
      <h4 className={style.titles}>
        Front-end Developer - AEM Certified Developer - UX/UI Designer{" "}
      </h4>
      <div className={style.bioContent}>
        <p className={style.bioText}>{bioText}</p>
        <Social links={links} />
      </div>
    </div>
  );
};
