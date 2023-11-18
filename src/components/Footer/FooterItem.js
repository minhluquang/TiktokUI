import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const FooterItem = ({ content }) => {
  return (
    <div className={cx('footer-item')}>
      {content.map((item, idx) => (
        <a key={idx} href={`${item}`} target="_blank" rel="noreferrer" className={cx('item-link')}>
          {item}
        </a>
      ))}
    </div>
  );
};

FooterItem.propTypes = {
  content: PropTypes.array,
};

export default FooterItem;
