const reducer = (featJobs = [], action) => {
    switch (action.type) {
        case 'FETCH_FEAT_JOBS':
            return action.payload;
        default:
            return featJobs;
    }
}

export default reducer