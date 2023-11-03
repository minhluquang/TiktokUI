import React from 'react';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

const DefaultLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
