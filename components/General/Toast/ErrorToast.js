import { Snackbar } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MuiAlert from '@mui/material/Alert';
import { hideToast } from '../../../redux/appReducer';

const Alert = React.forwardRef(function Alert(props, ref) {
    return (
        <MuiAlert
            sx={{
                fontFamily: 'Poppins-Bold',
                border:'none',
                '& .MuiAlert-icon': {
                    marginRight: 0,
                    marginInlineEnd: '12px'
                }
            }}
            elevation={6}
            ref={ref}
            variant="filled"
            {...props}
        />
    )
})

const ErrorToast = () => {
    const errorMsg = useSelector(state => state.app.toastMsg)?.message
    const isError = useSelector(state => state.app.toast)?.type === 'error'
    const dispatch = useDispatch()

    useEffect(() => {
        errorMsg && setTimeout(() => {
            dispatch(hideToast())
        }, 3000);

    }, [errorMsg, dispatch])

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(errorMsg && isError)}
            key={'error1'}
            autoHideDuration={3000}
        >
            <Alert severity={"error"}>{errorMsg}</Alert>
        </Snackbar>
    )
}

export default ErrorToast
