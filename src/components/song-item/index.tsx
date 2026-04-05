import { FC, ReactNode, memo } from 'react'
import { SongItemWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongItem: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <SongItemWrapper>
      <div className="cover-top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{itemData.name}</div>
    </SongItemWrapper>
  )
}

export default memo(SongItem)
