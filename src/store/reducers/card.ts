import { Reducer } from 'redux'
import { ICardState, CardAction, CardActionTypes } from '../../types/card'

const initialCardState: ICardState = {
    number: '',
    date: '',
    cvv: '',
}

export const cardReducer: Reducer<ICardState, CardAction> = (
    state = initialCardState,
    action
) => {
    switch (action.type) {
        case CardActionTypes.ADD: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case CardActionTypes.POST: {
            return {
                ...initialCardState,
            }
        }
        default:
            return state
    }
}
