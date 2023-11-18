import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const AccountItem = () => {
  const renderPreview = (attrs) => (
    <div className="preview" tabIndex="-1" {...attrs}>
      <PopperWrapper>
        <AccountPreview />
      </PopperWrapper>
    </div>
  );

  return (
    <div>
      <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-20, 0]} render={renderPreview}>
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
      </Tippy>
    </div>
  );
};

export default AccountItem;
