import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper(props) {
    return <div className={cx('wrapper', props.className)}>{props.children}</div>;
}

export default Wrapper;