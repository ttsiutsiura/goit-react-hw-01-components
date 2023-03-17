import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.friendListItem} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
