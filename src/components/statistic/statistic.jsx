import x from "./statistic.module.css";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ title, stats }) => {
  return (
    <section className={x.stat}>
      {title && <h2 className={x.stat__name}>{title}</h2>}
      <ul className={x.stat__list}>
        {stats.map((stat) => (
          <li
            className={x.stat__item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={x.stats__span}>{stat.label}</span>{" "}
            <span className={x.stats__span}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
