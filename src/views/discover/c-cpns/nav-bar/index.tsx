import { FC, ReactNode, memo } from 'react'
import { NavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local-data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item, index) => {
          return (
            <div className="item" key={index}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
