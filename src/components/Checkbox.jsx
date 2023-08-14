import { styled } from "styled-components"
/* eslint-disable react/prop-types */

const InputCheckbox = styled.input`
    font-size: 14px;
    width: 30px;
    height: 30px;
    border: 1px solid #ffbc42;
    border-radius: 4px;
    margin-right: 10px;
    `

const Checkout = ({onChange, value}) => {
    return (
        <>
            <InputCheckbox type="checkbox" onChange={onChange} value={value} checked={ value ? true : false }/>
        </>
    )
}

export default Checkout