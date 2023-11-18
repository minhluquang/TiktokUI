import classNames from 'classnames/bind';

import FooterItem from './FooterItem';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  const footerItemsContent = [
    ['About', 'Newsroom', 'Contact', 'Careers'],
    ['TikTok for Good', 'Advertise', 'Developers', 'Transparency', 'TikTok Rewards', 'TikTok Embeds'],
    ['Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines'],
  ];

  return (
    <div className={cx('wrapper')}>
      {footerItemsContent.map((itemContent, idx) => (
        <FooterItem key={idx} content={itemContent} />
      ))}
      <span className={cx('copy-right')}>© 2023 TikTok</span>
    </div>
  );
};

export default Footer;
