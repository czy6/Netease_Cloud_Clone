import { FC, ReactNode, memo } from 'react'
import { BarControl, BarOperator, BarPlayInfo, BarWrapper } from './style'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { formatTime } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = () => {
  return (
    <BarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={false}>
          <button
            className="btn sprite_playbar prev"
            // onClick={() => handleChangeBtnClick(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            // onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            // onClick={() => handleChangeBtnClick()}
          ></button>
        </BarControl>
        <BarPlayInfo>
          <NavLink to="/discover/player">
            <img
              src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
              alt=""
            />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">青花瓷</span>
              <span className="singer-name">周杰伦</span>
            </div>
            <div className="progress">
              <Slider step={0.5} />
              <div className="time">
                <span className="current">00:00</span>
                <span className="divider">/</span>
                <span className="duration">00:52</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator playMode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              // onClick={handlePlayModeClick}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
    </BarWrapper>
  )
}

export default memo(PlayerBar)
