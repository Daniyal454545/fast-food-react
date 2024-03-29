import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar'
import AuthContextProvider from './contexts/AuthContext';
import AdminContextProvider from './contexts/AdminContext';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import CreditCardPage from './pages/CreditCard/CreditCardPage';
import ClientContextProvider from './contexts/ClientContext';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
// import Favorites from './pages/Favorites';


const MyRoutes = () => {
    return (
        <AuthContextProvider>
        <ClientContextProvider>
        <AdminContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                {/* <Switch> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element = {<AdminPage/> }/>
                <Route path="/add" element = {<AddPage/>} />
                <Route path="/admin/edit/:id" element = {<EditPage />} />
                <Route path="/credit/card" element = {<CreditCardPage/>} />
                <Route path="/product/:id" element = {<DetailPage />} />
                <Route path="/cart" element = {<CartPage />} />
                {/* </Switch> */}

            </Routes>
            <Footer/>
        </BrowserRouter>
        </AdminContextProvider>
        </ClientContextProvider>
        </AuthContextProvider>
    ); 
};

export default MyRoutes;