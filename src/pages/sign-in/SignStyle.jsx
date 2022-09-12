import * as ReactRouter from 'react-router-dom'
import styled from 'styled-components'

export const SignWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 250px;
    margin: 0 auto;

    .line {
        width: 250px;
        height: 0px;
        border: 1px solid #DBDBDB;
        margin-top: 48px;
        margin-bottom: 38px;
    }

    p {
        font-weight: 400;
        font-size: 17px;
        text-align: center;
        text-decoration-line: underline;
        cursor: pointer;
    }
`

export const Link = styled(ReactRouter.Link)`
    text-decoration: none;
    color: #000;
`