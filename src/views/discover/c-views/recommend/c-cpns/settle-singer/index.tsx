import { FC, ReactNode, memo } from 'react'
import { SettleWrapper } from './style'
import SectionHeader from '@/components/section-header'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { artistList } = useAppSelector((state) => ({
    artistList: state.recommend.artistList
  }))

  return (
    <SettleWrapper>
      <SectionHeader
        title="入住歌手"
        more="查看全部"
        morePath="#/discover/artist"
      ></SectionHeader>
      <div className="singer-list">
        {artistList.map((artist) => {
          return (
            <a href="#/discover/artist" className="item">
              <img src={getImageSize(artist.picUrl, 62)} alt="" />
              <div className="info">
                <div className="singer">{artist.name}</div>
                <div className="desc">{artist.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="">申请成为网易音乐人</a>
      </div>
    </SettleWrapper>
  )
}

export default memo(SettleSinger)
