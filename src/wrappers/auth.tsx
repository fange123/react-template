import { Redirect, connect, IRoute } from 'umi'
import React from 'react'
import { IConnectState, IConnectProps } from '@/models/connect'

interface IProps extends IConnectProps, IRoute {}

export default connect(({ user }: IConnectState) => ({
  ...user
}))((props: IProps) => {
  const { route, personalInfo } = props
  const { role_name } = personalInfo
  const { exclude } = route
  if (exclude && exclude.includes(role_name)) {
    if (role_name === 'auditor' && route.path === '/home') {
      return <Redirect to="/audit" />
    }
    return <Redirect to="/404" />
  } else {
    return props.children
  }
})
