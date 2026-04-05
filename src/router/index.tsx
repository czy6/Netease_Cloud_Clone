import { Navigate, type RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover'))
const Download = lazy(() => import('@/views/download'))
const Mine = lazy(() => import('@/views/mine'))
const Foucs = lazy(() => import('@/views/foucs'))
const Alumb = lazy(() => import('@/views/discover/c-views/album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Recommned = lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover"></Navigate>
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend"></Navigate>
      },
      {
        path: '/discover/recommend',
        element: <Recommned />
      },
      {
        path: '/discover/album',
        element: <Alumb />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/foucs',
    element: <Foucs />
  }
]

export default routes
