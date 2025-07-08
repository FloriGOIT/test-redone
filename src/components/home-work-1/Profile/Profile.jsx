import style from './profile.module.scss';
import PropTypes from 'prop-types';


function Profile({ username, tag, me, location, stats }) {
  return (
    <>
      <section className={style.profileAll}> 
        <h2>Achievement</h2>
        <div className={style.userInfo}>
          <img src={me} alt={username} width={100} />
          <h4>{username}</h4>
          <h5>@{tag}</h5>
          <h5>{location}</h5>
        </div>
        <div className={style.statsInfo}>
          <div className={style.stats}>
            <p >Net income</p>
            <span >↗️{stats.income}</span>
          </div>
          <div className={style.stats}>
            <p>Currency</p>
            <span>{stats.currency}</span>
          </div>
          <div className={style.stats}>
            <p>Frequency</p>
            <span>{stats.frequency}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;

Profile.propTypes= {
  username: PropTypes.string,
  location: PropTypes.string,
  me: PropTypes.string,
  tag: PropTypes.string,
  stats:PropTypes.shape({income:PropTypes.number.isRequired, currency: PropTypes.string, frequency:PropTypes.string})
}