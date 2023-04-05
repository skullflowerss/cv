import style from "./Presentation.module.scss";

export const Presentation = () => {
  return (
    <div className={style.main_content}>
      <h1 className={style.title}>Ernesto Legazpi Arboleya</h1>
      <div className="divider"></div>
      <p className={style.subtitle}>
        Front-end Developer <span className={style.separator}>|</span> AEM
        Developer <span className={style.separator}>|</span> UX/UI Designer
      </p>
    </div>
  );
};
