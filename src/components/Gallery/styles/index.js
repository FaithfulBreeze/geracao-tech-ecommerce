import styled from "styled-components";

export const StyledGallery = styled.div`
    position: relative;
    background: #F5F5F5;
    white-space: nowrap;
    overflow-x: hidden;

    & #controlls{
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% - 20px);
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;
        & img{
            cursor: pointer;
            transition: 150ms;
            &:hover{
                transform: scale(1.5);
            }
        }
    }

    & img.slide-image{
        width: 100%;
        overflow-y: hidden;
        transition: 1.5s;
    }

    
`