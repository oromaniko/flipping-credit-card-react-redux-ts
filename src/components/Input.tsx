import React from 'react'
import InputMask from 'react-input-mask'
import inputSchema, { InputTypes } from './inputSchema'
import styled from 'styled-components'

interface InputProps {
    type: InputTypes
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ type, value, setValue }: InputProps) => {
    const handleChange =
        (setValue: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        }

    return (
        <InputWrapper
            as={InputMask}
            mask={inputSchema[type].mask}
            alwaysShowMask={false}
            value={value}
            onChange={handleChange(setValue)}
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                e.stopPropagation()
            }
            placeholder={inputSchema[type].placeholder}
            width={inputSchema[type].width}
        />
    )
}

export default Input

const InputWrapper = styled.input`
    background-color: transparent;
    padding: 0;
    border: 0;
    color: #ffffff;
    width: ${(props) => props.width};
`
