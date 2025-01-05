import {createstore} from 'redux'

const initialstate = {
    user: {
        username: 'AK',
        balance: 25000,
    },
}

export const updatewallet = (amt)=>( {
    type: 'UPDATE_WALLET',
    payload: amt
})