import React from 'react'
import BasicNavbar from '../Navbar/Navbar'
import FeaturedCompanies from './FeaturedCompanies/FeaturedCompanies'
import FeaturedJobs from './FeaturedJobs/FeaturedJobs'

const Home = () => {
    return (
        <div>
            <BasicNavbar />
            <FeaturedJobs />
            <FeaturedCompanies />    
        </div>
    )
}

export default Home
