import { ProductCard } from "../ProductCard"
import { StyledProductListingCol4, StyledProductListingCol3 } from "./styles"

export const ProductListing = ({ products, col }) => {
    const arr = [0]
    
    return (
        <>
            {arr.map(() => {
                if(col == "3"){
                    return <StyledProductListingCol3 key="col3">
                        {products.map((product, index) => (
                            <ProductCard 
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                priceDiscount={product.priceDiscount}
                                key={index}
                            />
                        ))}
                    </StyledProductListingCol3>
                }else{
                    return <StyledProductListingCol4 key="col4">
                        {products.map((product, index) => (
                            <ProductCard 
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                priceDiscount={product.priceDiscount}
                                key={index}
                            />
                        ))}
                    </StyledProductListingCol4>
                }
            })}
        </>
    )
}