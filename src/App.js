
import './App.css';
import Nav from './Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import PrivateComponent from './PrivateComponent';
import Login from './Login';
import AddProduct from './AddProduct'
import ProductsList from './ProductsList';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element= {<PrivateComponent/>}>
      <Route path="/" element={<ProductsList/>} />
      <Route path="/add" element={<AddProduct/>} />
      <Route path="/update/:id" element={<UpdateProduct/>} />
      <Route path="/logout" element={<h1>logout component</h1>} />
      <Route path="/profile" element={<h1>profile comp</h1>} />
      </Route>

      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />

      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
