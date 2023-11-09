import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = (props) => {
  const classes = cx('menu-item', {
    separate: props.data.separate,
  });
  return (
    <Button className={classes} to={props.data.to} leftIcon={props.data.icon} onClick={props.onClick}>
      {props.data.title}
    </Button>
  );
};

export default MenuItem;
