import { FC, ReactNode, memo, useRef } from 'react'
import { AlbumWrapper } from './style'
import AreaHeader from '@/components/area-header'
import Carousel, { CarouselRef } from 'antd/es/carousel'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import AlbumItem from '@/components/album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<CarouselRef>(null)

  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  )

  return (
    <AlbumWrapper>
      <AreaHeader title="新碟上线" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => bannerRef.current?.prev()}
        ></button>
        <div className="album">
          <Carousel ref={bannerRef} dots={false} speed={1000}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                    return <AlbumItem key={album.id} itemData={album} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => bannerRef.current?.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
