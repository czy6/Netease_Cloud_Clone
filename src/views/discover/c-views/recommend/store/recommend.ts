import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommed'

// export const fetchBannerDataAction = createAsyncThunk(
//   'banners',
//   async (payload, { dispatch }) => {
//     const res = await getBanners()
//     dispatch(changeBannersAction(res.banners))
//   }
// )

// export const fetchHotRecommendAction = createAsyncThunk(
//   'hotRecommend',
//   async (payload, { dispatch }) => {
//     const res = await getHotRecommend(8)
//     dispatch(changeHotRecommendAction(res.result))
//   }
// )

// export const fetchNewAlbumAction = createAsyncThunk(
//   'newAlbum',
//   async (payload, { dispatch }) => {
//     const res = await getNewAlbum()
//     dispatch(changeNewAlbumAction(res.albums))
//   }
// )

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    // 1.顶部的banners
    getBanners().then((res: any) => {
      dispatch(changeBannersAction(res.banners))
    })

    // 2.热门推荐
    getHotRecommend(8).then((res: any) => {
      dispatch(changeHotRecommendAction(res.result))
    })

    // 3.新碟上架
    getNewAlbum().then((res: any) => {
      dispatch(changeNewAlbumsAction(res.albums))
    })

    // 4.获取入住歌手
    getArtistList(5).then((res: any) => {
      dispatch(changeArtistListAction(res.artists))
    })

    return null
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (payload, { dispatch }) => {
    // 4.获取榜单数据
    const promise: Promise<any>[] = []
    for (const id of rankingIds) {
      promise.push(getPlaylistDetail(id))
    }

    Promise.all(promise).then((res) => {
      const list = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(list))
      console.log(list)
    })
  }
)

interface RecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  artistList: any[]
}

const initialState: RecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  artistList: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeArtistListAction(state, { payload }) {
      state.artistList = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumsAction,
  changeRankingsAction,
  changeArtistListAction
} = recommendSlice.actions
export default recommendSlice.reducer
