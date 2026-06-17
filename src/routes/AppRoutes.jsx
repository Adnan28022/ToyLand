import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';

// Layouts
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthLayout from '../layouts/AuthLayout';
import AdminLayout from '../layouts/AdminLayout';

// Web Pages
import Home from '../pages/webPages/Home';
import ShopPage from '../pages/webPages/Shop';
import NewArrivals from '../pages/webPages/NewArrivals';
import Categories from '../pages/webPages/Categories';
import Offers from '../pages/webPages/Offers';
import Cart from '../pages/webPages/Cart';
import Wishlist from '../pages/webPages/Wishlist';
import NotFound from '../pages/404Error';

// Auth Pages
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import ForgotPassword from '../auth/ForgotPassword';
import VerifyOTP from '../auth/VerifyOTP';
import ResetPassword from '../auth/ResetPassword';
import DashboardHome from '../pages/admin/Dashboard';
import AdminProducts from '../pages/admin/Products';
import AdminCategories from '../pages/admin/Categories';
import AdminOrders from '../pages/admin/Orders';
import AdminCustomers from '../pages/admin/Customers';
import AdminAnalytics from '../pages/admin/Analytics';
import AdminReviews from '../pages/admin/Reviews';
import AdminSettings from '../pages/admin/Settings';

// Scroll to Top
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Website Wrapper (Navbar aur Footer sirf in pages par dikhega)
const MainLayout = () => (
    <>
        <Navbar />
        <main className="min-h-screen">
            <Outlet />
        </main>
        <Footer />
    </>
);

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* 1. Website Routes (With Navbar & Footer) */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="new-arrivals" element={<NewArrivals />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="offers" element={<Offers />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* 2. Auth Routes (No Navbar/Footer - Uses AuthLayout) */}
                <Route path="/auth" element={<AuthLayout />}>
                    <Route index element={<Navigate to="login" />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="verify-otp" element={<VerifyOTP />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>

                {/* 3. Admin Routes (No Navbar/Footer - Uses AdminLayout) */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<DashboardHome />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="orders" element={<AdminOrders />} />
                    <Route path='categories' element={<AdminCategories />} />
                    <Route path='customers' element={<AdminCustomers />} />
                    <Route path='analytics' element={<AdminAnalytics />} />
                    <Route path='reviews' element={<AdminReviews />} />
                    <Route path='settings' element={<AdminSettings />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;