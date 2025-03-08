import React from 'react'
import AllPhotos from './AllPhotos'

import { Route, Routes } from 'react-router-dom'

function Index() {
  return (
    <>
      <Routes>
        <Route path='/'
          element={<AllPhotos />}>
        </Route>
        
      </Routes>
    </>
  )
}

export default Index
