import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

export const ToastStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
}

const getClassName = (state) => {
    switch (state) {
        case ToastStates.SUCCESS : return 'success';
        case ToastStates.FAIL : return 'fail';
        case ToastStates.LOADING : return 'loading';
        default : return 'default';
    }
}

const CustomToast = ({show, toastState = ToastStates.DEFAULT, title, message, onClose}) => {
    
    useEffect(() => {
        console.log('Showing Toast');
        if(show) {
            setTimeout(() => {
                if(onClose !== undefined) onClose();
                console.log('Hiding Toast');
            }, 3000)
        }},[show]
    )

    return (
        show === true && <div className={getClassName(toastState)}>
            <div class="toast fade show" role="alert">
                <div className="toast-icon">
                    {toastState === ToastStates.SUCCESS ? <FiCheckCircle className="mr-1"/> : <FiAlertCircle className="mr-1"/>}
                </div>
                <div class="toast-header">
                    <strong class="mr-auto"> 
                        {title}
                    </strong>
                </div>
                <div class="toast-body">{message}</div>
            </div>
        </div>
    )
}

export default CustomToast