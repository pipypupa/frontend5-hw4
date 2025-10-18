import y from "./friendsListItem.module.css";

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={y.item}>
      <span
        className={y.span}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img src={avatar} alt="User Avatar" width="55" />
      <p className={y.name}>{name}</p>
    </li>
  );
};
