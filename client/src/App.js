import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main/MainPage';
import './App.css';
import './pages/main/main.css';
import './pages/admin/media.css';
import MainAdmin from './pages/admin/mainAdmin/MainAdmin';
import Categories from './pages/admin/categories/Categories';
import Customers from './pages/admin/customers/Customers';
import Towars from './pages/admin/towars/Towars';
import Orders from './pages/admin/orders/Orders';
import Payments from './pages/admin/peyments/Payments';
import Delivery from './pages/admin/delivery/Delivery';
import Settings from './pages/admin/settings/Settings';
import AddCategory from './pages/admin/categories/AddCategory';
import UpdateCategory from './pages/admin/categories/UpdateCategory';
import UpdateTowar from './pages/admin/towars/UpdateTowar';
import AddDelivery from './pages/admin/delivery/AddDelivery';
import UpdateDelivery from './pages/admin/delivery/UpdateDelivery';
import AddPayments from './pages/admin/peyments/AddPayments';
import UpdatePayments from './pages/admin/peyments/UpdatePayments';
import OrderPage from './pages/admin/orders/OrderPage';
import Manufacture from './pages/admin/manufacturers/Manufacture';
import AddManufacture from './pages/admin/manufacturers/AddManufacture';
import UpdateManufacture from './pages/admin/manufacturers/UpdateManufacture';
import AddTowar from './pages/admin/towars/AddTowar';
import Colors from './pages/admin/colors/Colors';
import AddColor from './pages/admin/colors/AddColor';
import UpdateColor from './pages/admin/colors/UpdateColor';
import Sizes from './pages/admin/sizes/Sizes';
import AddSize from './pages/admin/sizes/AddSize';
import UpdateSize from './pages/admin/sizes/UpdateSize';
function App() {
  const link = 'http://localhost:8800/'
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/admin/main' element={<MainAdmin />} />

          <Route path='/admin/categories' element={<Categories />} />
          <Route path='/admin/categories/add' element={<AddCategory />} />
          <Route path='/admin/categories/update/:id' element={<UpdateCategory />} />

          <Route path='/admin/customers' element={<Customers />} />

          <Route path='/admin/products' element={<Towars />} />
          <Route path='/admin/products/add' element={<AddTowar />} />
          <Route path='/admin/products/update/:id' element={<UpdateTowar />} />

          <Route path='/admin/orders' element={<Orders />} />
          <Route path='/admin/orders/:id' element={<OrderPage />} />

          <Route path='/admin/payments' element={<Payments />} />
          <Route path='/admin/payments/add' element={<AddPayments />} />
          <Route path='/admin/payments/update/:id' element={<UpdatePayments />} />

          <Route path='/admin/delivery' element={<Delivery />} />
          <Route path='/admin/delivery/add' element={<AddDelivery />} />
          <Route path='/admin/delivery/update/:id' element={<UpdateDelivery />} />

          <Route path='/admin/manufacture' element={<Manufacture />} />
          <Route path='/admin/manufacture/add' element={<AddManufacture />} />
          <Route path='/admin/manufacture/update/:id' element={<UpdateManufacture />} />

          <Route path='/admin/sizes' element={<Sizes />} />
          <Route path='/admin/sizes/add' element={<AddSize />} />
          <Route path='/admin/sizes/update/:id' element={<UpdateSize />} />

          <Route path='/admin/colors' element={<Colors />} />
          <Route path='/admin/colors/add' element={<AddColor />} />
          <Route path='/admin/colors/update/:id' element={<UpdateColor />} />

          <Route path='/admin/settings' element={<Settings />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
