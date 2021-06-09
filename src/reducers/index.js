import { combineReducers } from 'redux'

import trendingKeywords from './trendKeywords'
import featCompanies from './featuredCompanies'
import featJobs from './featuredJobs'
import careerAdvices from './careerAdvices'
import vitalStats from './vitalStats'

export default combineReducers({
    trendingKeywords, featCompanies, featJobs, careerAdvices, vitalStats
})