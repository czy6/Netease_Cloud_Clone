import { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
