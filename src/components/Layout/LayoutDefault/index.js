import classNames from 'classnames/bind';

import React from 'react';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './LayoutDefault.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = (props) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
