import { string } from 'yup'

export interface IInputSchema {
    [key: string]: {
        mask: string
        yupSchema: any
        width: string
        placeholder: string
    }
}

export enum InputTypes {
    number = 'number',
    date = 'date',
    cvv = 'cvv',
}

const inputSchema: IInputSchema = {
    [InputTypes.number]: {
        mask: '9999 9999 9999 9999',
        yupSchema: string().matches(/(\d{4} \d{4} \d{4} \d{4})/, {
            message: 'Invalid card number',
        }),
        width: '130px',
        placeholder: '____ ____ ____ ____',
    },
    [InputTypes.date]: {
        mask: '99/99',
        yupSchema: string().matches(/(^(0[1-9]|1[0-2])\/?([0-9]{2})$)/, {
            message: 'Invalid date',
        }),
        width: '40px',
        placeholder: '__/__',
    },
    [InputTypes.cvv]: {
        mask: '9999',
        yupSchema: string().matches(/(\d{4})/, { message: 'Invalid CVV' }),
        width: '40px',
        placeholder: '____',
    },
}

export { inputSchema }
