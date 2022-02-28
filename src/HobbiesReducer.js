const HobbiesReducer = (state, action) => {
    if (action.type == "add") {
        return ([...state, action.value])
    }
    if (action.type == "delete") {
        console.log(action.index)
        let newState = state.filter(function (val, index) {
            if (action.index == index) {
                return false
            }
            return true
        })
        return newState
    }
    if (action.type == "clear") {
        return ([])
    }


}
export default HobbiesReducer;