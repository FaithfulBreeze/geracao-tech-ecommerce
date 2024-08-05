import FilterGroup from "../components/FilterGroup"
import Section from "../components/Section"
import ProductListing from "../components/ProductListing"
import { Layout } from "../layout"

export const ProductListingPage = () => {
    return(
        <Layout>
            <main>
                <div id="info-container">
                    <div id="results">
                        <p><span className="bold">Resultados para “Tênis”</span> - 389 produtos</p>
                    </div>
                    <div id="order-by">
                        <select >
                            <option><span className="bold">Ordernar por:</span> mais relevantes</option>
                        </select>
                  </div>

                </div>
                <div>
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
                        <ProductListing />
                    </Section>
                    
                </div>
            </main>

        </Layout>
    )
}