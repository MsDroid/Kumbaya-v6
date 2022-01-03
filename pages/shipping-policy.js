import React from 'react';
import Head from 'next/head';
import Spinner from '../Components/Layout/Comps/Spinner/Spinner'
import Header from '../Components/Layout/Comps/Header/Header';
import Footer from '../Components/Layout/Comps/Footer/Footer';

const ShippingPolicy = () => {
    return (
        <>
            <Head>
                <title>Shipping Policy - Kumbaya</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Spinner />
            <div className="site">
                <Header />
                <div className="main">
                    <div className='container'>
                        <div className='row'>
                            <h3 style={{ marginTop: '180px', marginBottom: '40px', textAlign: 'center', fontSize: '35px', textDecoration: 'underline' }}>Shipping policy</h3>

                            <p className='privacy-policy'>Kumbaya (Privedya Foods Pvt Ltd) collaborates with our courier partner for shipping across India. We only have standard shipping available at the moment. Depending on the location, it takes 2-9 days to be delivered.</p>

                            <p className='privacy-policy'>Due to COVID, there might be some operational challenges in shipping of orders. Kumbaya reserves the right to cancel an order within 48 hours from the time of order.
                            </p>

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

export default ShippingPolicy;