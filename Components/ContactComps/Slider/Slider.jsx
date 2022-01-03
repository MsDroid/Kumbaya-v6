import Link from "next/link";
import React from "react";

const Slider = () => {
  return (
    <>
      <section className="noo-page-heading eff heading-blog">
        <div className="container">
          <div className="noo-heading-content">
            <h1 className="page-title eff">Contact Us</h1>
            <div className="noo-page-breadcrumb eff">
				<Link href="/">
              <a className="home">
                Kumbaya
              </a>
			  </Link>
              /<span>Contact Us</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
