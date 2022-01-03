import React from 'react';
import Footer from './Comps/Footer/Footer';
import Header from './Comps/Header/Header';
import Spinner from './Comps/Spinner/Spinner';

const Layout = ({children}) => {
    return ( 
        <>
            <Spinner />
		<div className="site">
            <Header />
            {/* {children} */}
        </div>
            <Footer />
            <a href="#" className="go-to-top hidden-print"><i className="fa fa-angle-up"></i></a>
        </>
     );
}
 
export default Layout;