export const inc = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const dec = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}
export const ADD = (payload) => {
    return {
        type: 'ADD',
        payload
    }
}
export const Delete = (payload) => {
    return {
        type: 'DELETE',
        payload
    }
}

export const Edit = (payload) => {
    return {
        type: 'EDIT',
        payload
    }
}