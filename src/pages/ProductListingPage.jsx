import FilterGroup from "../components/FilterGroup"
import { Section } from "../components/Section"
import { ProductListing } from "../components/ProductListing"
import { Layout } from "../layout"
import styled from "styled-components"

export const ProductListingPage = () => {
    return(
        <Layout>
            <StyledMainContent>
                <div id="info-container">
                    <div id="results">
                        <p><span className="bold">Resultados para “Tênis”</span> - 389 produtos</p>
                    </div>
                    <div id="order-by">
                        <label htmlFor="order-by-select">Ordernar por: </label>
                        <select name="order-by" id="order-by-select">
                            <option value="mais-relevantes">mais relevantes</option>
                        </select>
                    </div>
                </div>
                <div id="parent-container">
                    <div id="filter-by">
                        <h3>Filtrar por</h3>
                        <hr />
                        <FilterGroup title="Marka" inputType="checkbox" options={[
                            {
                                text: "Adiddas"
                            },
                            {
                                text: "Calenciaga"
                            },
                            {
                                text: "K-Swiss"
                            },
                            {
                                text: "Nike"
                            },
                            {
                                text: "Puma"
                            }
                        ]} />

                        <FilterGroup title="Categoria" inputType="checkbox" options={[
                            {
                                text: "Esporte e lazer"
                            },
                            {
                                text: "Casual"
                            },
                            {
                                text: "Utilitário"
                            },
                            {
                                text: "Corrida"
                            }
                        ]} />

                        <FilterGroup title="Genero" inputType="checkbox" options={[
                            {
                                text: "Masculino"
                            },
                            {
                                text: "Feminino"
                            },
                            {
                                text: "Unisex"
                            }
                        ]} />   

                        <FilterGroup title="Estado" inputType="radio" options={[
                            {
                                text: "Novo"
                            },
                            {
                                text: "Usado"
                            }
                        ]} />  
                    </div>
                    <Section>
                        <ProductListing col="3" products={
                            [
                                {
                                    image: '',
                                    name: 'K-Swiss V8 - Masculino',
                                    price: '200',
                                    priceDiscount: '45'
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
                                {
                                    image: '',
                                    name: 'K-Swiss V8 - Masculino',
                                    price: '200',
                                    priceDiscount: '60'
                                },
                                {
                                    image: '',
                                    name: 'K-Swiss V8 - Masculino',
                                    price: '200',
                                    priceDiscount: '45'
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
                                    priceDiscount: '45'
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
                                    priceDiscount: '45'
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
                                }
                                
                            ]
                        }/>
                    </Section>
                    
                </div>
            </StyledMainContent>
        </Layout>
    )
}

const StyledMainContent = styled.main`
    padding-top: 40px;
    color: #474747;
    font-family: "Inter", sans-serif;
    & #order-by{
        width: 332px;
        padding: 16px 0 16px 15px;
        border: 1px solid #474747;
        border-radius: 1px;
        color: #474747;
        & label{
            font-weight: 700;
        }
        & #order-by-select{
            font-size: 16px;
            color: #474747;
            background-color: transparent;
            font-family: inherit;
            border: none;
            width: 60%;
        }
    }
    & span.bold{
        font-weight: 700;
    }
    & #info-container{
        width: 1240px;
        margin: auto;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        
    }
    &   div#parent-container div#filter-by{
        width: 308px;
        height: 720px;
        border-radius: 4px;
        background-color: white;
        padding: 30px;
        & hr{
            border-color: #CCCCCC;
            margin-top: 20px;
            border-width: 0.5px;
        }
        & h3{
            font-family: "Inter", sans-serif;
            font-weight: 700;
            font-size: 16px;
            color: #474747;
        }
    }
    & div#parent-container{
        display: flex;
        justify-content: space-between;
        width: 1240px;
        margin: auto;
        & section{
            width: 904px;
        }

    }
`