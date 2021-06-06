import { combineReducers } from 'redux'

import trendingKeywords from './trendKeywords'
import featCompanies from './featuredCompanies'
import featJobs from './featuredJobs'

export default combineReducers({
    trendingKeywords, featCompanies, featJobs
})