import { StyledBuyBox } from "./styles"
import whiteStarIcon from "../../assets/white-star-icon.svg"
import filledStar from "../../assets/star-icon-filled.svg"
import emptyStar from "../../assets/star-icon.svg"
import { ProductOptions } from "../ProductOptions"

export const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children}) => {
    const starsCount = Math.trunc(stars)
    const starsArray = [0, 0, 0, 0, 0]
    const discountStyle = {
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "28px",
        letterSpacing: "0.75px",
        textAlign: "left",
        textDecoration: "line-through",
        color: "#CCC"
    }
    return (
        <StyledBuyBox>
            <h2>{name}</h2>
            <p id="ref">Casual | Nike | REF:{reference}</p>
            <div id="score-container">
                <div id="stars">{starsArray.map((e, i) => i+1 <= starsCount  ? <img src={filledStar} key={i} /> : <img src={emptyStar} key={i} />)}</div>
                <div id="aux-container">
                    <p id="star-points">{stars} <img src={whiteStarIcon}/></p>
                    <p id="rating">({rating}) Avaliações</p>
                </div>
            </div>
            <div id="price-container">
                R$
                <div id="price-aux-container">
                    <p id="price-discount">{priceDiscount}</p>
                    <p id="price" style={priceDiscount ? discountStyle : {}}>{price}</p>
                </div>
            </div>
            <div id="description">
                <h3>Descrição do produto</h3>
                <p>{description}</p>
            </div>
            <div id="product-options">
                <p>Tamanho</p>
                <ProductOptions 
                    options={["39", "40", "41", "42", "43"]}
                    shape="square"
                    radius="4px"
                />
                <p>Cor</p>
                <ProductOptions 
                    options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}
                    shape="circle"
                />
            </div>
            
            <button>Comprar</button>
        </StyledBuyBox>
    )
}