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
                        <select id="selects" label="Ordenar por:">
                            <optgroup> 
                                <option value="">Mais relevantes</option>
                            </optgroup>
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
                    <Section >
                        <ProductListing products={
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
    & #info-container{
        width: 1240px;
        height: 60px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    } 
    & div#filter-by{
        width: 308px;
        height: 720px;
        border-radius: 4px;
        background-color: white;
        padding: 30px;
    }
    & div#parent-container{
        display: flex;
        justify-content: space-between;
        width: 1240px;
    }
`