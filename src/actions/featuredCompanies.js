import * as api from '../api'


export const getFeaturedComapnies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFeaturedCompanies();
        dispatch({ type: 'FETCH_FEAT_COMPANIES', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}