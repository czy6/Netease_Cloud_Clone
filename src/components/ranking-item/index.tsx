import { FC, ReactNode, memo } from 'react'
import { RankingsItemWrapper } from './style'
import { getImageSize } from '@/utils/format'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  itemData: any
}

const RankingItem: FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData

  return (
    <RankingsItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} />
          <a href="discover/ranking" className="sprite_cover"></a>
        </div>
        <div className="info">
          <Link to="/discover/ranking">{itemData.name}</Link>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn play sprite_02"></button>
                  <button className="btn addto sprite_icon2"></button>
                  <button className="btn favor sprite_02"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <Link to="/discover/ranking">查看全部 &gt;</Link>
      </div>
    </RankingsItemWrapper>
  )
}

export default memo(RankingItem)
