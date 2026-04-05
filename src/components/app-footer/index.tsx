import { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return <h1>APP底部</h1>
}

export default memo(AppFooter)
