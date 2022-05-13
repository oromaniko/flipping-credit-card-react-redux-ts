import React, { useState } from 'react'
import styled from 'styled-components'
import MastercardLogo from '../assets/mastercard_logo.svg'
import Chip from '../assets/Group.svg'
import Logo from '../assets/Logo.svg'
import Input from './Input'
import { InputTypes } from './inputSchema'

const Card = () => {
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [cvv, setCVV] = useState('')
    const [flipped, setFlipped] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setFlipped(!flipped)
    }

    return (
        <Container onClick={handleClick} flipped={flipped}>
            <CardWrapper>
                <FrontDataWrapper>
                    <div>Current Balance</div>
                    <div>$5,750,20</div>
                </FrontDataWrapper>
                <Img src={MastercardLogo} />
                <NumberWrapper>
                    <Input
                        type={InputTypes.number}
                        value={number}
                        setValue={setNumber}
                    />
                    <Input
                        type={InputTypes.frontDate}
                        value={date}
                        setValue={setDate}
                    />
                </NumberWrapper>
            </CardWrapper>

            <CardWrapper>
                <BackLogoWrapper>
                    <img src={Logo} alt='logo' />
                </BackLogoWrapper>
                <BackDataWrapper>
                    <div>
                        <div>Date</div>
                        <Input
                            type={InputTypes.backDate}
                            value={date}
                            setValue={setDate}
                        />
                    </div>
                    <div>
                        <div>CVV</div>
                        <Input
                            type={InputTypes.cvv}
                            value={cvv}
                            setValue={setCVV}
                        />
                    </div>
                </BackDataWrapper>
                <div>
                    <img src={Chip} alt='logo' />
                </div>
            </CardWrapper>
        </Container>
    )
}

export default Card

const Container = styled.div<{ flipped: boolean }>`
    transform-style: preserve-3d;
    width: 315px;
    height: 184px;
    perspective: 1200px;
    transition: transform 0.8s linear;
    transform: ${({ flipped }) =>
        flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};

    > div:first-child {
        transform: rotateY(0deg);
    }

    > div:last-child {
        transform: rotateY(180deg);
    }
`

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(177.23deg, #9c2cf3 -13.49%, #3a49f9 109.75%);
    border-radius: 30px;
    display: flex;
    padding: 30px 30px 25px 30px;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    backface-visibility: hidden;
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
