import { Effect, Reducer } from 'umi'
import api from '@/services'

export interface HomeList {
  name: string
  age: number
}

export interface HomeState {
  homeList: HomeList[]
}

export interface HomeModel {
  state: HomeState
  effects: {
    getHomeList: Effect
  }
  reducers: {
    updateState: Reducer<HomeState>
  }
}

const { getHomeList } = api

const Home: HomeModel = {
  state: {
    homeList: [
      {
        name: 'zz',
        age: 18
      }
    ]
  },
  effects: {
    *getHomeList({ payload, callback }, { call, put }) {
      const response = yield call(getHomeList, payload)
      if (response) {
        yield put({
          type: 'updateState',
          payload: {
            homeList: response
          }
        })
      }
      callback && callback()
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}

export default Home
