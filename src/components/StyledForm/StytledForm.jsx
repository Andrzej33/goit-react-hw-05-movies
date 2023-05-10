import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
width: 500px;
margin-left: 100px;
    input{
        display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 24px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 4px;
    color: #99A3BA;
    border: 3px solid #CDD9ED;
    background: #fff;
    transition: border .3s ease;
    &:focus {
        outline: none;
        border-color: #275EFE;
    } 
    }
    button {
        cursor: pointer;
        border-radius: 4px;
        text-align: center;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 25px;
        color: #99A3BA;
        background: #EEF4FF;
        border: 1px solid #CDD9ED;
        transition: background .3s ease, border .3s ease, color .3s ease;
    }
    &:focus-within {
        & > button {
            color: #fff;
            background: #678EFE;
            border-color: #275EFE;
            /* margin-left: 1px; */
        }
    }
`