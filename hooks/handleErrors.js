import { store } from "../redux"
import { setDangerToast } from "../redux/appReducer"
import { logoutHandler } from "./logoutHandler"

export default function HandleErrors(err) {
    //Showing Toast Function
    const showErrorToast = (msg) => {
        store.dispatch(setDangerToast(msg))
    }

    if (err?.code?.includes('token_not_valid')) {
        
        logoutHandler()
    }

    console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrdata", err)

    if (err.details?.reason) {
        showErrorToast(err.details?.reason)
    }
    else if (err?.err) {
        showErrorToast(err?.err)
    }
    else if (err.message) {
        showErrorToast(err.message)
    } else if (err.details?.length) {
        showErrorToast(err.details.join(', '))
    } else if (err.detail) {
        showErrorToast(err.detail)
    } else if (typeof err === "string") {
        showErrorToast(err)
    } else if (err && Object.keys(err)) {
        showErrorToast(err[Object.keys(err)[0]][0])
    } else if (Object.keys !== 0) {
        showErrorToast(Object.values(err)[0])
    }
    else {
        showErrorToast("خطأ غير متوقع!")
    }
}