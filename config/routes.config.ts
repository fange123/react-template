export interface IRoute {
  group?: boolean
  path?: string
  title?: string
  children?: IRoute[]
  active?: string
  component?: string
  breadcrumb?: string
  exclude?: string[]
  noShowInMenu?: boolean
  routes?: IRoute[]
  redirect?: string
  exact?: boolean
  wrappers?: string[]
}

export const menuRoutesData: IRoute[] = [
  {
    path: '/home',
    title: '应用总览',
    active: 'home',
    component: './home/Home',
    breadcrumb: '/home',
    exclude: ['auditor'],
    // wrappers: ['@/wrappers/auth']
  }

]

export default [
  {
    path: '/',
    component: './home',
  }
]
