const reducer = (careerAdvices = [], action) => {
    switch (action.type) {
        case 'FETCH_CAREER_ADVICE':
            return action.payload;
        default:
            return careerAdvices;
    }
}

export default reducer