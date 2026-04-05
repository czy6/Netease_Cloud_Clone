import { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
