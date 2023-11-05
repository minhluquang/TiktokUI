import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d~c5_300x300.webp?x-expires=1699329600&x-signature=xlTSeho6Tp3XoAU7Y3Qfc0kg8Uo%3D"
        alt="Hoaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Free Fire</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>hoa.hassani</span>
      </div>
    </div>
  );
};

export default AccountItem;
