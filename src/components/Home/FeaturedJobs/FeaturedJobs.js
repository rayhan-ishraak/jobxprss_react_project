import { Button, Card } from 'reactstrap'
import React from 'react'
import { useSelector } from 'react-redux'
import './FeaturedJobsStyle.css'
import moment from 'moment'

const FeaturedJobs = () => {

    const featJobs = useSelector(state => state.featJobs)

    function Jobs({ job }) {
        return (

            featJobs.map((job, index) => (
                <div key={job.job_id} className={ index%2 === 0 ? 'feat-jobs-0 row' : 'feat-jobs-1 row'}>
                    <div className='col-12 col-md-2 company-logo'>
                        <img src={job.company.profile_picture} alt={job.company.name} />
                    </div>
                    <div className='col-12 col-md-6 job-details'>
                        <h4>{job.title}</h4>
                        <ul>
                            <li>{job.company.name}</li>
                            <li>{job.job_area}</li>
                            <li>{job.job_type}</li>
                        </ul>
                        <ul>
                            <li>{moment(job.post_date).format('DD/MM/YYYY')}</li>
                        </ul>
                        
                    </div>
                    <div className='col-12 col-md-4 job-dates'>
                        <Button>Details</Button>
                        <p>{moment(job.application_deadline).format('DD/MM/YYYY')}</p>
                        <p>Expires in {moment(job.application_deadline).fromNow()}</p>
                    </div>
                </div>
            ))
        )
        
    }

    return (
        <div className="feat-jobs-body">
            <div className="container">
                <div className="fcom-head">
                    <h1>Featured Jobs</h1>
                </div>

                <span className="recent-bottom-border"></span>
                <Card className='feat-jobs-card'>
                    <Jobs />
                </Card>
            </div>
        </div>
    )
}

export default FeaturedJobs
