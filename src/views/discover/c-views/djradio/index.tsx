import { FC, ReactNode, memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Djredio: FC<IProps> = () => {
  return <div>Djredio</div>
}

export default memo(Djredio)
