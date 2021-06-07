import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'

// import { getKeywords } from './actions/trendKeywords'
import { getFeaturedComapnies } from './actions/featuredCompanies'
// import { getFeaturedJobs } from './actions/featuredJobs'
// import Home from './components/Home/Home';
// import Topbar from './components/Topbar/Topbar'
import Home from './components/home'


const App = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getKeywords())
    // }, [dispatch])

    // useEffect(() => {
    //     dispatch(getFeaturedJobs())
    // }, [dispatch])

    useEffect(() => {
        dispatch(getFeaturedComapnies())
    }, [dispatch])
    
    return (
        <BrowserRouter>
            <div>
    
                <Home />
            </div>
        </BrowserRouter>
        
    )
}

export default App
