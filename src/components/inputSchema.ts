export interface IInputSchema {
    [key: string]: {
        mask: string
        width: string
        placeholder: string
    }
}

export enum InputTypes {
    number = 'number',
    frontDate = 'frontDate',
    backDate = 'backDate',
    cvv = 'cvv',
}

const inputSchema: IInputSchema = {
    [InputTypes.number]: {
        mask: '9999 9999 9999 9999',
        width: '130px',
        placeholder: '____ ____ ____ ____',
    },
    [InputTypes.frontDate]: {
        mask: '99/99',
        width: '40px',
        placeholder: '__/__',
    },
    [InputTypes.backDate]: {
        mask: '99/99',
        width: '27px',
        placeholder: '__/__',
    },
    [InputTypes.cvv]: {
        mask: '9999',
        width: '30px',
        placeholder: '____',
    },
}

export default inputSchema
