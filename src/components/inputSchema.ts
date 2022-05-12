export interface IInputSchema {
    [key: string]: {
        mask: string
        width: string
        placeholder: string
    }
}

const inputSchema: IInputSchema = {
    number: {
        mask: '9999 9999 9999 9999',
        width: '130px',
        placeholder: '____ ____ ____ ____',
    },
    frontDate: {
        mask: '99/99',
        width: '40px',
        placeholder: '__/__',
    },
    backDate: {
        mask: '99/99',
        width: '27px',
        placeholder: '__/__',
    },
    cvv: {
        mask: '9999',
        width: '30px',
        placeholder: '____',
    },
}

export default inputSchema
