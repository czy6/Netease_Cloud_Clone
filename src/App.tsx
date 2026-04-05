import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { Suspense } from 'react'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/songs/app-player-bar'
// import store from './store'

// type GetStateFnType = typeof store.getState
// type IRootState = ReturnType<GetStateFnType>

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <AppPlayerBar />
    </div>
  )
}

export default App
