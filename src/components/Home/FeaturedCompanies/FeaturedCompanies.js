import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, Button } from 'reactstrap'
import './FeaturedCompanies.css'


const FeaturedCompanies = () => {

    const featCompanies = useSelector(state => state.featCompanies)
    
    return (
        <div className="container">
            <div className='row fcom'>
                <div className="fcom-head">
                        <h1>Featured Companies</h1>
                </div>

                <span className="recent-bottom-border"></span>

                <div className="col-12 cards">
                    <Row>
                        {featCompanies.results && featCompanies.results.map((element) => (
                            <Col sm={4}>
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
                            </Col>
                        ))}
                    </Row>
                </div>
           </div>
        </div>
    )
}

export default FeaturedCompanies
