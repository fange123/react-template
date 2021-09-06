import React from 'react'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Link, useDispatch } from 'umi'
import classnames from 'classnames'
import LogoImg from '@/assets/images/main_logo.png'
import styles from '../styles/BasicHeader.less'
import BasicSider from './BasicSider'
import { MAP_MAP_Role } from '@/utils/constant'

interface IProps {
  collapsed: boolean
  username: string
  mode?: 'horizontal' | 'vertical' | 'inline'
  role: string
}

const { Header } = Layout

const BasicHeader: React.FC<IProps> = props => {
  const dispatch = useDispatch()
  const { collapsed, mode, role, username } = props

  const toggleCollapse = () => {
    dispatch({
      type: 'app/toggleSider'
    })
  }

  return (
    <>
      {mode === 'vertical' ? (
        <Header className={styles.header}>
          <div className={classnames(styles.left, { [styles.logo_hide]: collapsed })}>
            <Link to="/" className={styles.logo_wrapper}>
              <img src={LogoImg} alt="logo" />
            </Link>
            {collapsed ? (
              <MenuUnfoldOutlined className={styles.icon_fold} onClick={toggleCollapse} />
            ) : (
              <MenuFoldOutlined className={styles.icon_fold} onClick={toggleCollapse} />
            )}
          </div>
          <div className={styles.right} />
        </Header>
      ) : (
        <Header
          className={classnames(
            mode === 'inline' ? styles.inline_header : styles.horizontal_header
          )}
        >
          <div className={styles.left}>
            <Link to="/" className={styles.logo_wrapper}>
              <img src={LogoImg} alt="logo" />
            </Link>
            <BasicSider
              mode={mode}
              pathname={window.location.pathname}
              collapsed={collapsed}
              role={role || 'admin'}
            />
          </div>
          <div className={styles.right}>
            <Link to="/userInfo">
              <span className={styles.admin}>
                {username} ({MAP_MAP_Role[role]})
              </span>
            </Link>
          </div>
        </Header>
      )}
    </>
  )
}

export default BasicHeader
