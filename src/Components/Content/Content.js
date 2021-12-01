import { Route, Routes } from 'react-router'
import Home from '../../Pages/Home/Home'
import NotFound from '../../Pages/NotFound/NotFound'
import ProductsList from '../../Pages/Products/ProductsList/ProductsList'
import ProductView from '../../Pages/Products/ProductView/ProductView'
import NewProduct from '../NewProduct/NewProduct'
import StoresList from '../../Pages/Stores/StoresList/StoresList'
import StoresView from '../../Pages/Stores/StoresView/StoresView'
import NewStore from '../NewStore/NewStore'
import './Content.css'

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/stores" element={<StoresList />} />
        <Route path="/stores/:id" element={<StoresView />} />
        <Route path="/stores/new" element={<NewStore />} />
        <Route path="/profile" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Content
