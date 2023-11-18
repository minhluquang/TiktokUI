import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountPreview = ({}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://lh3.googleusercontent.com/a/ACg8ocLmtB-KB4SZVjpSIIBpn__kxwVqDShKS4uloS20l65f9D4=s288-c-no"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>

      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>minhluquang</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>

        <p className={cx('name')}>Lữ Quang Minh</p>

        <p className={cx('analytics')}>
          <strong className={cx('value')}>6.7M</strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
};

export default AccountPreview;
