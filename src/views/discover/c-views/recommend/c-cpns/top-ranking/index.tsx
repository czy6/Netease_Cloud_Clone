import { FC, ReactNode, memo } from 'react'
import { RankingWrapper } from './style'
import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/store'
import RankingItem from '@/components/ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }))

  return (
    <RankingWrapper>
      <AreaHeader title="榜单" moreLink="/discover/ranking"></AreaHeader>
      <div className="ranking">
        {rankings.map((item) => {
          return <RankingItem itemData={item}></RankingItem>
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
