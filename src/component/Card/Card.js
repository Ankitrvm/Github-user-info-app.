import classes from "./Card.module.css";

const Card = ({ user }) => {
  return (
    <div className={classes.cardDiv}>
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className={classes.avatar}
      />

      <h2 className={classes.userName}>{user.login}</h2>

      <p className={classes.name}>{user.name}</p>

      <p className={classes.info}>Public Repos : {user.public_repos}</p>

      <p className={classes.info}>Public Gists: {user.public_gists}</p>

      <p className={classes.info}>Profile Created: {user.created_at}</p>

      <a
        className={classes.profileLink}
        href={user.html_url}
        target="_blank"
        rel="nooper noreferrer"
      >
        View profile
      </a>
    </div>
  );
};

export default Card;
