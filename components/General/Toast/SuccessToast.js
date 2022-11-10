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

const SuccessToast = () => {
    const successMsg = useSelector(state => state.app.toast)?.message
    const isSuccess = useSelector(state => state.app.toast)?.type === 'success'
    const dispatch = useDispatch()

    useEffect(() => {
        successMsg &&
            setTimeout(() => {
                dispatch(hideToast())
            }, 3000)

    }, [successMsg, dispatch])

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(successMsg && isSuccess)}
            key={'success1'}
            autoHideDuration={3000}
        >
            <Alert severity={"success"}>{successMsg}</Alert>
        </Snackbar>
    )
}

export default SuccessToast
