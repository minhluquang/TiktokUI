import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://lh3.googleusercontent.com/a/ACg8ocLmtB-KB4SZVjpSIIBpn__kxwVqDShKS4uloS20l65f9D4=s288-c-no"
        alt=""
      />

      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>minhluquang</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </p>
        <p className={cx('name')}>Lữ Quang Minh</p>
      </div>
    </div>
  );
};

export default AccountItem;
