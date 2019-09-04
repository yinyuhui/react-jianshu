const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    const { type } = action

    switch(type) {
        case 'search_input_focus': 
            newState.focused = true
            break
        case 'search_input_blur': 
            newState.focused = false
            break
        default: 
    }

    
    return newState
}