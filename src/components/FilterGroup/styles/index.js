import styled from "styled-components";

export const StyledFilterGroup = styled.div`
    font-family: "Inter", sans-serif;
    & label {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.25px;
        color: #474747;

    } 
    & div{
        display: flex;
        align-items: center;
        
    }
    & input {
        accent-color: #C92071;
    }
    & p{
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: 700;
        color: #474747;
    }

`