import React, { useCallback, useState } from 'react'
import InputMask from 'react-input-mask'
import { InputTypes, inputSchema } from './inputSchema'
import styled from 'styled-components'

interface InputProps {
    type: InputTypes
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    setValid: React.Dispatch<
        React.SetStateAction<{ number: boolean; date: boolean; cvv: boolean }>
    >
}

const Input = ({ type, value, setValue, setValid }: InputProps) => {
    const [validationError, setValidationError] = useState('')

    const handleChange =
        (setValue: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        }

    const handleBlur = useCallback(async () => {
        const isValid = await inputSchema[type].yupSchema.isValid(value)
        if (isValid) {
            setValidationError('')
            setValid((prev) => ({ ...prev, [type]: true }))
        } else {
            inputSchema[type].yupSchema
                .validate(value, {
                    abortEarly: false,
                })
                .catch((err: any) => {
                    setValidationError(String(err.message))
                })
        }
    }, [value, setValid, type])

    return (
        <InputContainer>
            <InputWrapper
                as={InputMask}
                mask={inputSchema[type].mask}
                alwaysShowMask={false}
                value={value}
                onChange={handleChange(setValue)}
                onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    e.stopPropagation()
                }
                onBlur={handleBlur}
                placeholder={inputSchema[type].placeholder}
                width={inputSchema[type].width}
            />
            {validationError && <Error>{validationError}</Error>}
        </InputContainer>
    )
}

export default Input

const InputContainer = styled.div`
    position: relative;
`

const InputWrapper = styled.input<{ width: string }>`
    background-color: transparent;
    padding: 0;
    border: 0;
    color: #ffffff;
    width: ${({ width }) => width};
`

const Error = styled.div`
    font-size: 10px;
    line-height: 12px;
    color: #e14343;
    padding: 1px 0;
    position: absolute;
    width: 180%;
`
