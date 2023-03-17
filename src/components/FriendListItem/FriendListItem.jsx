import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <span
        className={clsx(css.status, isOnline ? css.online : css.offline)}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}
