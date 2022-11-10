import React from 'react'
import SuccessToast from './SuccessToast'
import ErrorToast from './ErrorToast'

const Toast = () => {
    return (
        <div>
            <SuccessToast />
            <ErrorToast />
        </div>
    )
}

export default Toast
