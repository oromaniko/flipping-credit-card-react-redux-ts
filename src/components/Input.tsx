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

    const validate = useCallback(
        async (currentValue: string) => {
            const isValid = await inputSchema[type].yupSchema.isValid(
                currentValue
            )
            if (isValid) {
                setValidationError('')
            } else {
                inputSchema[type].yupSchema
                    .validate(currentValue, {
                        abortEarly: false,
                    })
                    .catch((err: any) => {
                        setValidationError(String(err.message))
                    })
            }
        },
        [type]
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value
        setValue(currentValue)
        validate(currentValue)
    }

    const handleBlur = (e: React.FocusEvent) => {
        e.stopPropagation()
        if (!validationError) {
            setValid((prev) => ({ ...prev, [type]: true }))
        } else {
            setValid((prev) => ({ ...prev, [type]: false }))
        }
    }

    return (
        <InputContainer>
            <InputWrapper
                as={InputMask}
                mask={inputSchema[type].mask}
                alwaysShowMask={false}
                value={value}
                onChange={handleChange}
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
