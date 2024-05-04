export const inc = (num) => {
    return{
        type: 'INCREMENT',
        payload:num
    }  
}

export const dec = (num) => {
    return{
        type: 'DECREMENT',
        payload:num
    }
};
