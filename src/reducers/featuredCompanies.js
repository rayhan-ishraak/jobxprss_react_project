const reducer = (featComapnies = [], action) => {
    switch (action.type) {
        case 'FETCH_FEAT_COMPANIES':
            return action.payload;
        default:
            return featComapnies;
    }
}

export default reducer