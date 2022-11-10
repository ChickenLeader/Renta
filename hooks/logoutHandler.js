import { store } from "../redux";
import { logout } from "../redux/authReducer";


export const logoutHandler = async () => {
    localStorage.removeItem("token");
    store.dispatch(logout())
}