import { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Foucs: FC<IProps> = () => {
  return <div>Foucs</div>
}

export default memo(Foucs)
