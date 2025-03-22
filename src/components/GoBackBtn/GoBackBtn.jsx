import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';
const GoBackBtn = ({ path }) => {
  return (
    <Link className={css.link} to={path}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
