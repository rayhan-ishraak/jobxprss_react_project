import * as api from '../api'


export const getKeywords = () => async (dispatch) => {
    try {
        const { data } = await api.fetchKeywords();
        dispatch({ type: 'FETCH_KEYWORDS', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}