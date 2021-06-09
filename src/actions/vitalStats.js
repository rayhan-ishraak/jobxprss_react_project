import * as api from '../api'


export const getVitalstats = () => async (dispatch) => {
    try {
        const { data } = await api.fetchVitalStats();
        dispatch({ type: 'FETCH_VITAL_STATS', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}