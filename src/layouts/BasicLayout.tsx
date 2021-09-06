import React, { useEffect } from 'react'
import { ConfigProvider, Layout } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
// https://ant-design.gitee.io/docs/react/faq-cn#%E6%88%91%E7%9A%84%E7%BB%84%E4%BB%B6%E9%BB%98%E8%AE%A4%E8%AF%AD%E8%A8%80%E6%98%AF%E8%8B%B1%E6%96%87%E7%9A%84%EF%BC%9F%E5%A6%82%E4%BD%95%E5%88%87%E5%9B%9E%E4%B8%AD%E6%96%87%E7%9A%84%E3%80%82
import 'moment/locale/zh-cn'
import { connect, useDispatch } from 'umi'
import { IConnectState, IConnectProps } from '@/models/connect'
import BasicHeader from './components/BasicHeader'
import BasicSider from './components/BasicSider'
import Breadcrumbs from './components/Breadcrumbs'
import styles from './styles/BasicLayout.less'

const { Content } = Layout

interface IProps extends React.Props<any>, IConnectProps {}

const USER_INFO = 'user/getAccountInfo'

const BasicLayout: React.FC<IProps> = props => {
  const dispatch = useDispatch()
  const { children, app, user } = props
  const { collapsed, layout = 'horizontal' } = app
  const { username, role_name } = user.personalInfo
  const isInLoginLayout = ['/login', '/404', '/500', '/register'].some(
    item => location.pathname.indexOf(item) === 0
  )

  const getUserInfo = () => {
    dispatch({
      type: USER_INFO
    })
  }

  useEffect(() => {
    if (!isInLoginLayout) {
      getUserInfo()
    }
  }, [isInLoginLayout])

  // 针对登录页面，单独设置布局
  if (isInLoginLayout) {
    return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
  }

  return (
    <ConfigProvider locale={zhCN} renderEmpty={() => <div>111</div>}>
      {layout === 'vertical' ? (
        <Layout>
          <BasicHeader mode={layout} collapsed={collapsed} username={username} role={role_name} />
          <Layout>
            <BasicSider
              mode={layout}
              pathname={window.location.pathname}
              collapsed={collapsed}
              role={role_name}
            />
            <Layout
              className={styles.main_container_wrapper}
              style={{ marginLeft: collapsed ? '60px' : '160px' }}
            >
              <Breadcrumbs />
              <div className={styles.main_container}>{children}</div>
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <Layout className={styles.horizontal_layout}>
          <BasicHeader mode={layout} collapsed={collapsed} username={username} role={role_name} />
          <Content className={styles.horizontal_content}>
            <Breadcrumbs />
            <div className={styles.horizontal_main}>{children}</div>
          </Content>
        </Layout>
      )}
    </ConfigProvider>
  )
}

export default connect(({ app, user }: IConnectState) => ({
  app,
  user
}))(BasicLayout)
