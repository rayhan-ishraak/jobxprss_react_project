import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import './home.css'

const FeaturedJobs = () => {

    const featJobs = useSelector(state => state.featJobs)

    function Salary ({ salary, minSalary, maxSalary }) {
        var Negotiable = "Negotiable";
        if (salary == null && minSalary != null) {
            return ( <>{minSalary} - {maxSalary}</>)
        }
        else if (minSalary == null) {
            return (<>{Negotiable}</>)
        }
        else {
            return (<>{salary}</>)
        }
    }

    function Jobs({ job }) {
        return (

            
            featJobs.map((job, index) => (
                <div key={job.job_id} className={ index%2 === 0 ? 'feat-jobs-0 job-list' : 'feat-jobs-1 job-list'}>
                    <div className="thumb">
                    <a href="/company-details/Rainbow Logistics Limited">
                        <img src={job.company.profile_picture} className="img-fluid" alt="" />
                    </a>
                    </div>
                    <div className="body">
                        <div className="content" style={{ maxWidth: '700px'}}>
                            <h4><a target="_blank" class="job-title" href="job-detail/senior-executive-sales-85710b01">{job.title}</a></h4>
                            <div className="info"><span className="company">
                                {/* eslint-disable-next-line */}
                                <a href="/company-details/Rainbow Logistics Limited"><i class="fas fa-building" style={{ marginRight: '5px' }}></i>{job.company.name}</a>
                                {/* eslint-disable-next-line */}
                                </span><span className="office-location"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Dhaka</a></span><span class="job-type full-time"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <span className="text-normal">{job.job_type}</span></a></span></div>
                                <div className="info" style={{ marginTop: '10px' }}><span className="posted_date"><i class="fas fa-calendar" style={{ marginRight: "5px" }}></i>Posted on {moment(job.post_date).format('DD/MM/YYYY')}</span>
                                <span className="salary"><i className="fas fa-money-bill" style={{ marginRight: '5px' }}></i>Salary: <Salary salary={job.salary} minSalary={job.salary_min} maxSalary={job.salary_max} /></span>
                            </div>
                        </div>
                                <div class="more">
                                    <div className="buttons">
                                        {/* eslint-disable-next-line */}
                                        <a target="_blank" href="/job-detail/senior-executive-sales-85710b01" className="button btn-yellow job-details-btn" style={{ minWidth: '115px' }, { textAlign: 'center' }}>Details</a>
                                        {/* eslint-disable-next-line */}
                                        <a href="undefined" class="favourite"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
                                    </div>
                                    {/* eslint-disable-next-line */}
                                    <p className="apply-deadline apply-deadline-0" style={{fontSize: '20.8px'}, {marginTop: '10px'}, { marginBottom: '0px' }, { fontStyle: 'italic' }, { fontWeight: '300' }, { display: 'block' }, { textAlign: 'right' }} >Deadline: {moment(job.application_deadline).format('DD/MM/YYYY')}</p>
                                    {/* eslint-disable-next-line */}
                                    <p className="deadline-0" style={{ fontSize: '1.3rem' }, { marginTop: '10px' }, { fontStyle: 'italic' }, { fontWeight: '300' }, { display: 'block' }, {textAlign: 'right'}}>Expires {moment(moment(job.application_deadline).add(1,'d')).fromNow()}</p>
                                </div>
                    </div>
                </div>
            ))
        )
        
    }

    return (
        <div>
            <Jobs />
            {/* eslint-disable-next-line */}
            {/* <div class="job-list">
                
            </div> */}
        </div>
    )
}

export default FeaturedJobs


