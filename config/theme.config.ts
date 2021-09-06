const defaultHeight = '32px'
const headerBg = '#243351'
const white = '#fff'

export default {
  // common
  '@text-color': '#333',
  '@border-radius-base': '4px',
  // '@primary-color': '#1890ff',
  '@layout-body-background': '#f5f6f8',
  '@layout-header-background': headerBg,
  '@layout-header-height': '74px',
  '@layout-header-padding': '0 40px',
  // menu
  '@menu-collapsed-width': '45px',
  '@menu-item-height': '40px',
  '@menu-bg': headerBg,
  '@menu-popup-bg': white,
  '@menu-item-color': '#6d778b',
  '@menu-highlight-color': white,
  '@menu-item-active-bg': '#71d3c5',
  '@menu-item-active-border-width': '0px',
  // form
  '@form-item-margin-bottom': '24px',
  // button
  '@btn-height-base': defaultHeight,
  // input
  '@input-height-base': defaultHeight,
  '@sdl-green': '#3cd0be',
  '@sdl-green-hover': '#64decc',

  // 下面的为项目自定义变量
  // 为了防止与 antd 冲突，变量名必须以 ms 开头
  'ms-primary-color': '#26c9d8',
  'ms-background-color': '#e1f7f8',
  'ms-steps-color': '#ddd',

  'ms-border-color': '#ebebeb',
  'ms-text-color': '#333',

  'ms-white': '#fff',
  'ms-gray': '#666',
  'ms-blue': '#20A0FF',

  'ms-level-serious': '#ad194e',
  'ms-level-high': '#DD3E3E ',
  'ms-level-middle': '#ff6f39',
  'ms-level-low': '#f5d70d',
  'ms-level-common': '#199bff',

  'ms-blue-button-color': '#20a0ff',
  'ms-blue-button-hover-color': '#5e9fe9'
}
