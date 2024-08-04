import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ProductViewPage } from "./pages/ProductViewPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/product-view-page" element={<ProductViewPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
