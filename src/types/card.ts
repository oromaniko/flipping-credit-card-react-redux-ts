export interface ICardState {
    number: string
    date: string
    CVV: string
}

export enum CardActionTypes {
    ADD = 'ADD',
    POST = 'POST',
}

export interface ICardAddAction {
    type: CardActionTypes.ADD
    payload: ICardState
}

export interface ICardPostAction {
    type: CardActionTypes.POST
}

export type CardAction = ICardAddAction | ICardPostAction
