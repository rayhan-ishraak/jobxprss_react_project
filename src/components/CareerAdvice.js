import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import './home.css'

const CareerAdvice = () => {

    const careerAdvices = useSelector(state => state.careerAdvices)

    return (

        <div className='row' id='career-advice'>
            {careerAdvices.map((advice) => ( 
            <div key={advice.id} className="col-md-6 col-lg-4 career-advice-item"> 
                <article className="blog-grid"> 
                    <div className="careerAdviceImgageWrapper"><img className="image" width="100%" src={advice.featured_image} alt="" />
                        <div className="middle">
                            {/* eslint-disable-next-line */}
                            <a href="/career-advice/details/85" class="text"><i style={{ position: 'relative' }, { marginTop: '20px' }, { marginLeft: '2px' }, { color: '#000'}} class="fas fa-3x fa-glasses"></i></a>
                        </div>
                    </div>
                    {/* eslint-disable-next-line */}
                    <div className="body"><h3 className='career-advice-h3' style={{ minHeight: '75px' }, { maxHeight: '75px' }}>{advice.title}</h3>
                        <span className="author d-block" id="ad-author"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> {advice.author}</span>
                        <span>{moment(advice.posted_at).format('DD/MM/YYYY')}</span>
                        {/* eslint-disable-next-line */}
                        <p className='career-advice-paragraph' style={{ maxHeight: '97px' }, { minHeight: '97px' }, { marginTop: '10px'}, { overflow: 'hidden'}} id="ad-description">{advice.short_description}</p>
                    </div>
                </article>
            </div>
            ))}
        </div>
    )
}

export default CareerAdvice
