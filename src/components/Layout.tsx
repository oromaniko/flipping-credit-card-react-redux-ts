import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Layout = () => {
    return (
        <Container>
            <Card />
        </Container>
    )
}

export default Layout

const Container = styled.div`
    width: 100%;
    background-color: #112531;
    padding: 57px 135px;
`
