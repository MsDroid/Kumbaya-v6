import React from 'react';
import Head from 'next/head';
import Spinner from '../Components/Layout/Comps/Spinner/Spinner'
import Header from '../Components/Layout/Comps/Header/Header';
import Footer from '../Components/Layout/Comps/Footer/Footer';

const ReturnAndRefundPolicy = () => {
    return (
        <>
            <Head>
                <title>Return and Refund Policy - Kumbaya</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Spinner />
            <div className="site">
                <Header />
                <div className="main">
                    <div className='container'>
                        <div className='row'>
                            <h3 style={{ marginTop: '180px', marginBottom: '40px', textAlign: 'center', fontSize: '35px', textDecoration: 'underline' }}>Return And Refund Policy</h3>

                            <h4 className='ptitle'>Can I cancel my order?</h4>

                            <p className='privacy-policy'>We accept order cancellation only if the order has not been dispatched yet. If you still wish to cancel your order, a two-way shipping fee will be charged. Please email us on orders@kumbaya.in for any cancellations.</p>

                            <h4 className='ptitle'>When can I return my order?</h4>

                            <p className='privacy-policy'>You can return the products:</p>

                            <p className='privacy-policy'>1) If the product reaches you in a condition which renders it unfit for use, beyond expiry date etc., we urge you to contact us within 24 hours from delivery. We will analyse the issue through photographs or at our warehouse, as the situation demands, and upon finding that the product has reached you in a condition as stated above, initiate a refund within 72 hours.</p>

                            {/* <p className='privacy-policy'>We accept order cancellation only if the order has not been dispatched yet. If you still wish to cancel your order, a two-way shipping fee will be charged. Please email us on orders@kumbaya.in for any cancellations.</p> */}


                            <p className='privacy-policy'>2) We do not accept ‘Taste’ as a factor for returning the product, as we acknowledge and understand that everyone may not have the same/similar taste preferences.</p>

                            <p className='privacy-policy'>3) In case of packaged/branded food products, we will only accept refunds in the case that products have reached beyond the date of expiry, or similar reasons; if there are any quality related issues with a product, write to us at info@kumbaya.in . We try our best to perfect our product description with pictures, but these pictures may vary in colour, texture, print etc, we do not accept returns on these bases. </p>

                            <p className='privacy-policy'>4) The final and binding decision for whether the product is eligible for refund, on a case-by-case basis, lies with Kumbaya (Privedya Foods Pvt Ltd) only.</p>

                            <h4 className='ptitle'>How are refunds processed?</h4>

                            <p className='privacy-policy'>Refund will be initiated within 72 hours of acknowledgement of an issue. It will be processed to the original payment source except COD. In case of COD, our team will contact you for your bank account details in which the amount can be credited.</p>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <a href="#" className="go-to-top hidden-print">
                <i className="fa fa-angle-up"></i>
            </a>
        </>
    );
}

export default ReturnAndRefundPolicy;