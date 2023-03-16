import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        <li className={css.item}>
          <span className={css.label}>{stats[0].label}</span>
          <span className={css.percentage}>{stats[0].percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[1].label}</span>
          <span className={css.percentage}>{stats[1].percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[2].label}</span>
          <span className={css.percentage}>{stats[2].percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[3].label}</span>
          <span className={css.percentage}>{stats[3].percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{stats[4].label}</span>
          <span className={css.percentage}>{stats[4].percentage}</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
