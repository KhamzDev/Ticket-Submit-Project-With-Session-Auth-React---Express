import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import LoginPage from "./pages/login-page/LoginPage";
import RequireAuth from "./utils/RequireAuth";
import MainLayout from "./layouts/MainLayout";
import ProfilePage from "./pages/profile-page/ProfilePage";
import TForm from "./pages/ticket-form-page/TForm";
import TicketView from "./pages/ticket-view/TicketView";


export const route = createBrowserRouter([
    {
        element: (
            <RequireAuth>
                <MainLayout />
            </RequireAuth>
        ),
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/profile",
                element: <ProfilePage />
            },
            {
                path: "/ticket-form",
                element: <TForm />
            },
            {
                path: "/ticket/:id",
                element: <TicketView />
            }
        ]
    }, 
    {
        path: "/login",
        element: <LoginPage />
    }
])