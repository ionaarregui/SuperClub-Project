import { Route, Routes } from "react-router";
import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import ProductsList from "../../Pages/Products/ProductsList/ProductsList";
import ProductView from "../../Pages/Products/ProductView/ProductView";
import StoresList from "../../Pages/Stores/StoresList/StoresList";
import StoresView from "../../Pages/Stores/StoresView/StoresView";

export default function MainArea() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsList />} />
                {/* <Route path="/products/new" element={<UnaWea />} /> */}
                <Route path="/products/:id" element={<ProductView />} />
                <Route path="/stores" element={<StoresList />} />
                {/* <Route path="/stores/new" element={<OtraWea />} /> */}
                <Route path="/stores/:id" element={<StoresView />} />
                <Route path="/profile" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}
