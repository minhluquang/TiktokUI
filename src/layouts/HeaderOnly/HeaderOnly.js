import React from 'react';
import Header from '~/layouts/components/Header';

const HeaderOnly = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default HeaderOnly;
