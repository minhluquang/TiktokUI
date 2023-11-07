import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = (props) => {
  return (
    <Button className={cx('menu-item')} to={props.data.to} leftIcon={props.data.icon}>
      {props.data.title}
    </Button>
  );
};

export default MenuItem;
