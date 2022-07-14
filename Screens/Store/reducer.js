let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === 'searchAdd')
    {
        return [
            ...state,
            {
                description: action.payload.description,
                id: ++lastId
            }
        ];
    }
    else if (action.type === 'searchRemoved')
        return state.filter(search => search.id !== action.payload.id);
    return state;
}