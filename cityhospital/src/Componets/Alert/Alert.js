import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { resetAlert } from '../../Redux/Action/alert.action';
function Alert(props) {
    const alert = useSelector(state => state.alert)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispach = useDispatch()

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
            setTimeout(dispach(resetAlert()), 2000);
        }
    }, [alert.text])
    return (
        <div>

        </div>
    );
}

export default Alert;