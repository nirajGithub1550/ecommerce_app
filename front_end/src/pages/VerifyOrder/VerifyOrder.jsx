import React, { useContext, useState, useEffect } from 'react'
import './VerifyOrder.css';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

const VerifyOrder = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url + '/api/order/verify', { success, orderId });
        console.log(response);
        
        if (response.data.success) {
            navigate('/myorders');
        }
        else {
            navigate('/');
        }
    }
    useEffect(() => {
        verifyPayment();
    }, [])



    return (
        <div className='verify'>
            <div className='spinner'></div>
        </div>
    )
}

export default VerifyOrder
