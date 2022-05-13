import { CardAction, CardActionTypes, ICardState } from '../../types/card'

export const addCardData = (data: ICardState): CardAction => {
    alert('Card data has been saved to store')
    return {
        type: CardActionTypes.ADD,
        payload: data,
    }
}
