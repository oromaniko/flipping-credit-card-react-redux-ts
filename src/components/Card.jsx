import React from 'react'
import styled from 'styled-components'
import MastercardLogo from '../assets/mastercard_logo.svg'
import Chip from '../assets/Group.svg'
import Logo from '../assets/Logo.svg'

const Card = () => {
    return (
        <>
            <CardWrapper>
                <FrontDataWrapper>
                    <div>Current Balance</div>
                    <div>$5,750,20</div>
                </FrontDataWrapper>
                <Img src={MastercardLogo} />
                <NumberWrapper>
                    <Input width={160} value='5282 5282 5282 5282' />
                    <Input width={40} value='09/25' />
                </NumberWrapper>
            </CardWrapper>

            <CardWrapper>
                <BackLogoWrapper>
                    <img src={Logo} alt='logo' />
                </BackLogoWrapper>
                <BackDataWrapper>
                    <div>
                        <div>Date</div>
                        <Input width={30} value='09/25' />
                    </div>
                    <div>
                        <div>CVV</div>
                        <Input width={30} value='2435' />
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
