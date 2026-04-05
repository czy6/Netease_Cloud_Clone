import { FC, ReactNode, memo } from 'react'
import { HeaderLeft, HeaderRight, HeaderWapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface TitleType {
  type: string
  title: string
  link: string
}

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: TitleType) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerTitles.map((item, index) => {
              return (
                <div className="select-item" key={index}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="input">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </span>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWapper>
  )
}

export default memo(AppHeader)
