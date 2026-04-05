import { FC, ReactNode, memo } from 'react'
import { RecommendWrapper } from './style'
import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import SongItem from '@/components/song-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )

  return (
    <RecommendWrapper>
      <AreaHeader
        title="热门推荐"
        keywords={['华语', '流行', '电子']}
        moreLink="/discover/songs"
      ></AreaHeader>
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongItem key={item.id} itemData={item}></SongItem>
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
