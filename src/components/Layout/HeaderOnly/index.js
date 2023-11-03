import React from 'react';
import Header from '~/components/Layout/components/Header';

const DefaultLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
