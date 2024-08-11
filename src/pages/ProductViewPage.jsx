import { Layout } from "../layout"
import { Gallery } from "../components/Gallery"
import { BuyBox } from "../components/BuyBox"
import { Section } from "../components/Section"
import { ProductListing } from "../components/ProductListing"
import styled from "styled-components"
import img1 from "../assets/slide/product-page-slide-1.svg"
import img2 from "../assets/slide/product-page-slide-2.svg"
import img3 from "../assets/slide/product-page-slide-3.svg"
import img4 from "../assets/slide/product-page-slide-4.svg"
import img5 from "../assets/slide/product-page-slide-5.svg"


export const ProductViewPage = () => {
    return(
        <Layout>
            <StyledViewPage>
                <p className="path"><span className="bolder">Home</span> <span className="span">/</span> Produtos <span className="span">/</span> Tênis <span className="span">/</span> Nike <span className="span">/</span> Tênis Nike Revolution 6 Next Nature Masculino</p>
                <div id="buy-section">
                    <Gallery radius="4px" showThumbs width="700px" images={[
                        {
                            src: img1
                        },
                        {
                            src: img2
                        },
                        {
                            src: img3
                        },
                        {
                            src: img4
                        },
                        {
                            src: img5
                        },
                    ]} />
                    <BuyBox 
                    name="Tênis Nike Revolution 6 Next Nature Masculino" 
                    reference="38416711"
                    stars={2.9}
                    rating={90}
                    price={'219,00'}
                    priceDiscount={'219,00'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'}
                    >

                    </BuyBox>
                </div>
                <Section title="Produtos recomendados" titlePosition="left" link={{
                    "text": "Ver todos",
                    "href": "/products"
                }}>
                    <ProductListing products={[
                        {
                            image: '',
                            name: 'K-Swiss V8 - Masculino',
                            price: '200',
                            priceDiscount: '30'
                        },
                        {
                            image: '',
                            name: 'K-Swiss V8 - Masculino',
                            price: '200',
                            priceDiscount: '30'
                        },
                        {
                            image: '',
                            name: 'K-Swiss V8 - Masculino',
                            price: '200',
                            priceDiscount: '30'
                        },
                        {
                            image: '',
                            name: 'K-Swiss V8 - Masculino',
                            price: '200',
                            priceDiscount: '90'
                        },
                    ]} />
                </Section>
            </StyledViewPage>
        </Layout>
    )
}

const StyledViewPage = styled.div`
    margin: auto;
    width: 1240px;
    & #buy-section{
        width: 100%;
        display: flex;
        gap: 40px;
    }
    & p.path{
        margin: 20px 0 40px 0;
        font-family: "Inter", sans-serif;
        color: #474747;
        font-size: 14px;
        font-weight: 500;
    }
    & section{
        margin-top: 138px;
        margin-bottom: 127px;
    }
    .span{
        margin: 0 6px;
    }
    .bolder{
        font-weight: 700;
    }
`