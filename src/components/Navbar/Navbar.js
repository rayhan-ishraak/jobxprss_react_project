import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './Navbar.css'

const BasicNavbar = () => {

    const trendingKeywords = useSelector((state) => state.trendingKeywords)

    const keywords = Object.entries(trendingKeywords).map(([code, name]) => ({id: code, word: name}))
    

    
    return (
        <div className='banner-bg'>
            <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/logo.png" height="auto" width="200" z-index='3'
                            alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        
                        <Nav className='navs'>
                            <NavItem>
                                <NavLink className="nav-links" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-links" to="/home">
                                    Jobs
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-links" to="/home">
                                    Career Advice
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-links" to="/aboutus">
                                    About Us
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-links" to="/contactus">
                                    Contact Us
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-links" to="/signin">
                                    Sign In
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-links" to="/signup">
                                    Sign Up
                                </NavLink>
                            </NavItem>
                        </Nav>
                        
                    </div>
                </Navbar>

                <div className='banner-items'>
                    <h1>All the Great Jobs in One Place!</h1>
                    <h2>Search</h2>
                    <ul className="ultest">
                    <b>Trending Keywords: </b>
                    {keywords.map((kword) => (
                            
                            <li key={kword.id} className="testkeyword">{kword.word.keyword}</li>
                            
                        ))}
                    </ul>

                    <div className="fact-items">
                        <div className="fact-item">
                            <img className="fun-fact-image" src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/fi-rr-briefcase.svg" alt='open jobs'/>
                            <div className="fun-fact">
                            <b className="fun-fact-title">Open Jobs</b>
                            <b className="fun-fact-number">3468</b>
                            </div>
                            
                        </div>
                        <div className="fact-item">
                            <img className="fun-fact-image" src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/fi-rr-briefcase.svg" alt='vaccancies' />
                            <div className="fun-fact">
                            <b className="fun-fact-title">Vaccancies</b>
                            <b className="fun-fact-number">4438</b>
                            </div>
                        </div>
                        <div className="fact-item">
                            <img className="fun-fact-image" src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/fi-rr-briefcase.svg" alt='skills' />
                            <div className="fun-fact">
                            <b className="fun-fact-title">Skills</b>
                            <b className="fun-fact-number">766</b>
                            </div>
                        </div>
                        <div className="fact-item">
                            
                            <img className="fun-fact-image" src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/fi-rr-briefcase.svg" alt='skills'/>
                            <div className="fun-fact">
                            <b className="fun-fact-title">Companies</b>
                            <b className="fun-fact-number">12189</b>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BasicNavbar
