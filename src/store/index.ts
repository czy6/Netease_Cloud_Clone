import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import playReducer from '@/views/songs/store/player'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playReducer
  }
})

// type GetStateFnType = typeof store.getState
// type AppDispatch = typeof store.dispatch
// type IRootState = ReturnType<GetStateFnType>

// export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
// export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
