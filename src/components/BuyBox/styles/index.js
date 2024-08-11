import styled from "styled-components";

export const StyledBuyBox = styled.div`
    font-family: "Inter", sans-serif;
    & h2{
        width: 440px;
        letter-spacing: 1px;
        font-weight: 700;
        font-size: 32px;
        color: #1F1F1F;
        margin-bottom: 10px;
    }
    & p#ref{
        font-size: 12px;
        color: #666666;
        margin-bottom: 10px;
    }
    & #score-container{
        display: flex;
        gap: 14px;
        align-items: center;
        & div#stars{
            display: flex;
            align-items: center;
        }
        & div#aux-container{
            display: flex;
            justify-content: space-between;
            gap: 10px;
                font-weight: 500;
                align-items: center;
            & p#star-points{
                display: flex;
                align-items: center;
                gap: 3.5px;
                background-color: #F6AA1C;
                padding: 3px 12px;
                border-radius: 4px;
                color: white;
                font-weight: 900;
            }

            & p#rating{
                color: #8F8F8F;
                font-size: 14px;
            }
        }
    }

    & div#price-container{
        margin-top: 20px;
        display: flex;
        align-items: baseline;
        color: #474747;
        & div#price-aux-container{
            display: flex;
            align-items: baseline;
            gap: 10px;
            font-size: 32px;
            font-weight: 700;
        }
    }

    & div#description{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        & h3{
            font-family: "Inter";
            font-size: 14px;
            font-weight: 700;
            color: #8F8F8F;
        }

        & p{
            width: 440px;
            font-family: "Inter";
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            letter-spacing: 0.25px;
            text-align: justify;
            color: #474747;
        }
    }
    & button{
            font-family: "Inter";
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.75px;
            text-align: center;
            color: #F5F5F5;
            width: 220px;
            height: 48px;
            background-color: #FFB31F;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition-duration: 200ms;
            &:hover{
                background-color: rgba(225, 149, 0, 1);
                color: #FFF;
            }
        }
`