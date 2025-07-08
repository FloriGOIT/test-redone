import style from './stats.module.scss';
import PropTypes from 'prop-types';

function Stats({ stats }) {
  return (
    <div className={style.statsWraper}>
      <Title />
      <Statistics stats={stats} />
    </div>
  );
}



const Title = () => {
  return <h3>Upload statistics</h3>;
};
const Statistics = ({ stats }) => {
  function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <ul className={style.list}>
      {stats.map(stat => {
        let liColor = getRandomHexColor();
        return (
          <li key={stat.id} style={{ backgroundColor: liColor }}>
            <span className={style.docType}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

Stats.propTypes = {
        stats: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          })
        )
      };

export default Stats;
