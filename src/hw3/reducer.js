export const SET_LOADING = 'SET_LOADING'
export const SET_STYLE_PAGES = 'SET_STYLE_PAGES'
//export const SET_STYLE_FILTER = 'SET_STYLE_FILTER'

const initialState = {
    loading: true,
    colorStyles: [
        {id: 0, title: 'Default', status: true},
        {id: 1, title: 'Dark', status: false},
        {id: 2, title: 'Blue', status: false}
    ],
    style: ''


}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state, loading: action.loading
            }
        case SET_STYLE_PAGES:
            debugger
            return {
                ...state,
                colorStyles: state.colorStyles.map((cs) => {
                    if (cs.id === action.Id) {
                        return {
                            ...cs,
                            status: true
                        }
                    } else {
                        return {...cs, status: false}
                    }
                }),
                style: action.style
            }


        default:
            return state
    }
}

export const setLoadingAC = (loading) => {
    return {type: SET_LOADING, loading}
}
export const setStylePagesAC = (Id, status, style) => {
    return {type: SET_STYLE_PAGES, Id, status, style}
}

