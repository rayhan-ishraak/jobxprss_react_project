const reducer = (vitalStats = [], action) => {
    switch (action.type) {
        case 'FETCH_VITAL_STATS':
            return action.payload;
        default:
            return vitalStats;
    }
}

export default reducer