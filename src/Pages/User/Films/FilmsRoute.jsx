import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Films from './FilmPage'

function FilmsRoute() {
    return (
        <>
            <Routes>
                <Route path='/'
                    element={<Films />}>
                </Route>
                
            </Routes>
        </>
    )
}

export default FilmsRoute
