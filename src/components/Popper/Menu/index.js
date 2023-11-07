import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = (props) => {
  const renderItems = () => {
    return props.items.map((item, idx) => <MenuItem key={idx} data={item} />);
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {props.children}
    </Tippy>
  );
};

export default Menu;
