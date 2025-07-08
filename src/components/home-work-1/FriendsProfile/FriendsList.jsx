import style from './friendsList.module.scss';
import PropTypes from 'prop-types';

function FriendList({ friendsList }) {
  return (
    <div className={style.friendsAll}>
      <ul>
        {friendsList.map(({ avatar, naming, isOnline, id }) => {
          return (
            <li key={id}>
              <span>{isOnline ? '🟢' : '🔴'}</span>
              <img src={avatar} alt={naming} width={50} />
              <p>{naming}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FriendList;

FriendList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({
            avatar: PropTypes.string,
            naming: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number
    })
  ),
};
