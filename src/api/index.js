import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.jobxprss.com' });

export const fetchKeywords = () => API.get('/api/job/trending_keywords');
export const fetchFeaturedCompanies = () => API.get('/api/company/list/featured');
export const fetchFeaturedJobs = () => API.get('/api/job/featured/v2');
export const fetchCareerAdvices = () => API.get('/api/v2/career_advice_show');
export const fetchVitalStats = () => API.get('/api/vital_stats/get');

