const reducer = (jobs = [], action) => {
    switch (action.type) {
        case 'FETCH_KEYWORDS':
            return action.payload;
        default:
            return jobs;
    }
}

export default reducer