import * as api from '../api'


export const getFeaturedJobs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFeaturedJobs();
        dispatch({ type: 'FETCH_FEAT_JOBS', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}