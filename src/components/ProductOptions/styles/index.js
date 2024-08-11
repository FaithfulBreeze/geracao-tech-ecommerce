import styled from "styled-components";

export const StyledProductOptions = styled.div`
    display: flex;
    gap: 10px;
    color: #474747;
    & p.selected{
        outline: 2px solid #C92071;
        outline-offset: 2px;
        color: white;
    }
    & p#box.selected{
        background-color: #C92071;
        border: 1px solid #C92071;
        outline: none;
    }
`