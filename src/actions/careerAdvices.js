import * as api from '../api'


export const getCareerAdvice = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCareerAdvices();
        dispatch({ type: 'FETCH_CAREER_ADVICE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}