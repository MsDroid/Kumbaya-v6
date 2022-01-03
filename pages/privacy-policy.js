import React from 'react';
import Head from 'next/head';
import Spinner from '../Components/Layout/Comps/Spinner/Spinner'
import Header from '../Components/Layout/Comps/Header/Header';
import Footer from '../Components/Layout/Comps/Footer/Footer';
// import '../styles/custom.module.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Kumbaya</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Spinner />
      <div className="site">
        <Header />
        <div className="main">
          <div className='container'>
            <div className='row'>
              <h3 style={{ marginTop: '180px', marginBottom: '40px', textAlign: 'center', fontSize: '35px', textDecoration: 'underline' }}>Privacy policy</h3>
              
              <p className='privacy-policy'>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.kumbaya.in (the “Site”).</p>
              
              <h4 className='ptitle'>Personal information we collect</h4>
              
              <p className='privacy-policy'>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.</p>
              
              <p className='privacy-policy'><b>We collect device information using the following technologies:</b> <br/> <br/>
                - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.<br/> <br/>
                - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.<br /><br/>
                - “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site. <br /></p>
              
              <p className='privacy-policy'>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information”.</p>
              
              <p className='privacy-policy'>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>
              
              <h4 className='ptitle'>How do we use your personal information?</h4>
              
              <p className='privacy-policy'>We use the Order Information that we collect generally to fulfil any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:<br/><br/>
                - Communicate with you;<br/>
                - Screen our orders for potential risk or fraud; and<br/>
                - When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.<br/>
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

export default PrivacyPolicy;