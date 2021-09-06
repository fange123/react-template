import { IConnectProps, IConnectState } from '@/models/connect'
import React, { useEffect } from 'react'
import { connect } from 'umi'
import { HomeState } from './models/home'

interface IProps extends IConnectProps, HomeState {}

const Home: React.FC<IProps> = props => {
  const { homeList, dispatch } = props
  useEffect(() => {
    dispatch({
      type: 'home/getHomeList'
    })
  }, [])

  return (
    <div>
      姓名：{homeList[0]?.name}, age:{homeList[0]?.age}
    </div>
  )
}

export default connect(({ home }: IConnectState) => ({
  ...home
}))(Home)
