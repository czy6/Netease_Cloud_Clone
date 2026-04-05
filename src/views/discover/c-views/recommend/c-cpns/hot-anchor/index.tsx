import { FC, ReactNode, memo } from 'react'
import { AnchorWrapper } from './style'
import SectionHeader from '@/components/section-header'
import { hotRadios } from '@/assets/data/local-data'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <SectionHeader title="热门主播"></SectionHeader>
      <div className="anchor-list">
        {hotRadios.map((radio) => {
          return (
            <a href="#/discover/artist" className="item">
              <div className="iamge">
                <img src={getImageSize(radio.picUrl, 40)} alt="" />
              </div>
              <div className="info">
                <div className="name">{radio.name}</div>
                <div className="position">{radio.position}</div>
              </div>
            </a>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
