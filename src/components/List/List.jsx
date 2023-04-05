import style from "./List.module.scss";

export const List = ({ elements }) => {
  console.log(elements);
  const { title } = elements;
  const { array } = elements;

  return (
    <div className={style.listSection}>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {array.map((element, index) => {
          const { description, duration } = element;
          const titleElement = element.company
            ? element.company
            : element.title;
          return (
            <li key={index} className={style.listItem}>
              <div className={style.listBox}>
                <span className={style.titleList}>{titleElement}</span>
                <br />
                <span className={style.duration}>{duration}</span>
              </div>
              <span className={style.description}>{description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
