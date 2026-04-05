import { FC, ReactNode, Suspense, memo } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'
import { DiscoverWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <NavBar></NavBar>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
