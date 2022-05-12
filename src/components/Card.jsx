import React, { useState } from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'
import MastercardLogo from '../assets/mastercard_logo.svg'
import Chip from '../assets/Group.svg'
import Logo from '../assets/Logo.svg'

const Card = () => {
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [cvv, setCVV] = useState('')

    const handleChange = (setValue) => (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <CardWrapper>
                <FrontDataWrapper>
                    <div>Current Balance</div>
                    <div>$5,750,20</div>
                </FrontDataWrapper>
                <Img src={MastercardLogo} />
                <NumberWrapper>
                    <InputMask
                        mask='9999 9999 9999 9999'
                        value={number}
                        alwaysShowMask={false}
                        onChange={handleChange(setNumber)}
                    >
                        {(inputProps) => (
                            <Input
                                {...inputProps}
                                width={130}
                                placeholder='____ ____ ____ ____'
                            />
                        )}
                    </InputMask>
                    <InputMask
                        mask='99/99'
                        value={date}
                        alwaysShowMask={false}
                        onChange={handleChange(setDate)}
                    >
                        {(inputProps) => (
                            <Input
                                {...inputProps}
                                width={40}
                                placeholder='__/__'
                            />
                        )}
                    </InputMask>
                </NumberWrapper>
            </CardWrapper>

            <CardWrapper>
                <BackLogoWrapper>
                    <img src={Logo} alt='logo' />
                </BackLogoWrapper>
                <BackDataWrapper>
                    <div>
                        <div>Date</div>
                        <InputMask
                            mask='99/99'
                            value={date}
                            alwaysShowMask={false}
                            onChange={handleChange(setDate)}
                        >
                            {(inputProps) => (
                                <Input
                                    {...inputProps}
                                    width={30}
                                    placeholder='__/__'
                                />
                            )}
                        </InputMask>
                    </div>
                    <div>
                        <div>CVV</div>
                        <InputMask
                            mask='9999'
                            value={cvv}
                            alwaysShowMask={false}
                            onChange={handleChange(setCVV)}
                        >
                            {(inputProps) => (
                                <Input
                                    {...inputProps}
                                    width={30}
                                    placeholder='____'
                                />
                            )}
                        </InputMask>
                    </div>
                </BackDataWrapper>
                <div>
                    <img src={Chip} alt='logo' />
                </div>
            </CardWrapper>
        </>
    )
}

export default Card

const CardWrapper = styled.div`
    width: 315px;
    height: 184px;
    background: linear-gradient(177.23deg, #9c2cf3 -13.49%, #3a49f9 109.75%);
    border-radius: 30px;
    display: flex;
    padding: 30px 30px 25px 30px;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

const Input = styled.input`
    background-color: transparent;
    padding: 0;
    border: 0;
    color: #ffffff;
    width: ${(props) => `${props.width}px`};
`

const FrontDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    div:first-child {
        opacity: 0.54;
    }

    div:last-child {
        font-size: 28px;
        line-height: 33px;
    }
`

const Img = styled.img`
    position: absolute;
    top: 25px;
    right: 30px;
`

const NumberWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    letter-spacing: 0.5px;

    input:first-child {
        opacity: 0.9;
    }
`

const BackLogoWrapper = styled.div`
    position: relative;
    height: 25px;

    img {
        position: absolute;
        top: -10px;
    }
`

const BackDataWrapper = styled.div`
    display: flex;
    gap: 25px;

    div {
        display: flex;
        flex-direction: column;
        gap: 12px;

        div {
            font-size: 12px;
            line-height: 14px;
            opacity: 0.5;
        }

        input {
            font-size: 11px;
            line-height: 162.7%;
        }
    }
`
