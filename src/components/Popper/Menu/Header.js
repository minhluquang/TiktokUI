import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Menu = (props) => {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={props.onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('header-title')}>{props.title}</h4>
    </header>
  );
};

export default Menu;