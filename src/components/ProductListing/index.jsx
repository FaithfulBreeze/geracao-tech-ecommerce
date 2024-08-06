import { ProductCard } from "../ProductCard"
import { StyledProductListing } from "./styles"

export const ProductListing = ({ products, width }) => {
    return(
        <StyledProductListing>
            <div style={{width:width || "1440px"}}>
                {products.map((product, index) => (
                    <ProductCard 
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                        key={index}
                    />
                ))}
            </div>
        </StyledProductListing>
    )
}