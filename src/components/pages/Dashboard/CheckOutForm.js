import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError]= useState('');
    const [clientSecret, setClientSecret]= useState('');
    const [paymentId, setPaymentId]= useState('');
    const [successMsg, setSuccessMsg]= useState('');

    const {_id,amount, customer,email}=order;


    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({amount})
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })
    },[amount])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message)
        }
        
        const {error: intentError ,paymentIntent } = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    name:customer,
                    email: email
                }
            }
        });

        if(intentError){
            setCardError(intentError?.message)
        }else{
            setCardError('')
            setPaymentId(paymentIntent.id);
            setSuccessMsg('Congratulation, Your Payment is Successful');
        }

        const payment={
            paymentId: paymentIntent.id
        }

        fetch(`http://localhost:5000/orders/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(payment)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    };

return (
    <form onSubmit={handleSubmit} className="w-full">
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />

        <button className='btn btn-sm btn-accent my-5' type="submit" disabled={ !stripe || !clientSecret || successMsg}>
           Make Payment
        </button>
       { cardError && <p className='text-red-500 font-bold'>{cardError}</p>}
       { successMsg && <p className='text-green-500 font-bold'>{successMsg}</p>}


    </form>
);
};

export default CheckOutForm;