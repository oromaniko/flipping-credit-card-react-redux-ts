export interface ICardState {
    number: number | null
    date: string
    CVV: number | null
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

export type CardAction =
    | ICardAddAction
    | ICardPostAction