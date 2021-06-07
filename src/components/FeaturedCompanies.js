import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, Button } from 'reactstrap'
import './home.css'
import './FeaturedCompanies.css'

const FeaturedCompanies = () => {

    const featCompanies = useSelector(state => state.featCompanies)

    return (
        // <div class="top-companies-wrapper" >
            <div class="container" id="featured-companies">
                <div class="row">
                    <div class="col">
                        <div class="section-header">
                            <h2 class="mb-5">Featured Companies</h2>
                            <span class="m-auto recent-bottom-border">&nbsp;</span>
                        </div>
                        
                    </div>
                </div>
                <Row>
                        {featCompanies.results && featCompanies.results.map((element) => (
                            
                            <div class="col-lg-4 col-md-6 col-sm-12 featured-company-list-item">
                                <div class="job-list featured-company-list">
                                <div class="thumb">
                                    <a href="#">
                                        <img src={element.profile_picture}  class="img-fluid" alt="profile-picture" />
                                    </a>
                                </div>
                                <div class="body">
                                    <div class="content">
                                        <h4><a title="ACI Limited" href="/company-details/ACI Limited">{element.name}</a></h4>
                                    <div class="info">
                                    <span class="office-location"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>{element.city}, Bangladesh</a></span>
                                    </div>
                                    <a href="/company-details/ACI Limited/" class="button btn-yellow" style={{ marginTop: '10px' }}>{element.num_posts} Job(s)</a>
                                    </div>                        
                                </div>
                                </div>
                            </div>
                        ))} 
                </Row>
            </div>
        // </div>
    )
}

export default FeaturedCompanies

{/* <Col sm={4}>
                            <Card key={element.name} className="cardItem">
                                
                                    <div>
                                        <CardImg className="cardImage" src={element.profile_picture} />
                                    </div>
                                    
                                    <CardBody className="cardBody">
                                        <CardTitle>{element.name}</CardTitle>
                                        <CardText>{element.city}</CardText>
                                        <Button className="cardButton">{element.num_posts} Job(s)</Button>
                                    </CardBody>
                                
                            </Card>
                            </Col> */}