import { Space } from 'antd';
import { useTheme } from 'antd-style';
import classNames from 'classnames';

import SvgIcon from '@/components/SvgIcon';

import logoName from '@/assets/images/name_white.png';
import { useAppSelector } from '@/stores';

import useStyles from './app-logo.module.style';

import type { FC } from 'react';

const AppLogo: FC = () => {
  const token = useTheme();
  const { styles } = useStyles();
  const getMenuFold = useAppSelector((state) => state.app.appConfig?.menuSetting?.menuFold);

  return (
    <div className={classNames('anticon', styles['app-logo'])}>
      <Space>
        <SvgIcon
          style={{
            color: token.colorPrimary,
          }}
          name='logo'
          size={30}
        />
        <div className={styles.container}>
          <span className={styles.text}>{'Beata Admin'}</span>
        </div>

        {/* <img className={classNames(styles['logo-name'], { [styles.hidden]: getMenuFold })} src={logoName} alt='logo' /> */}
      </Space>
    </div>
  );
};

export default AppLogo;
