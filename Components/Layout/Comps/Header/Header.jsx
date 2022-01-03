import next from "next";
import Link from "next/link";
import { base_url } from "../../../../urlConfig";

const Header = () => {
  return (
    <>
      <header className="noo-header header-1">
        <div className="navbar-wrapper">
          <div className="navbar navbar-default">
            <div className="container-fluid">
              <div className="menu-position">
                <div className="navbar-header pull-left">
                  <div className="noo_menu_canvas">
                    <div className="btn-search noo-search">
                      <i className="fa fa-search"></i>
                    </div>
                    <div data-target=".nav-collapse" className="btn-navbar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <Link href="/">
                    <a className="navbar-brand">
                      <img
                        className="noo-logo-img noo-logo-normal"
                        src={base_url + "assets/images/Kumbaya-Final_Dots.png"}
                        alt=""
                        style={{ width: "149px", height: "39px" }}
                      />
                    </a>
                  </Link>
                </div>
                <nav className="pull-right noo-menu-option">
                  <a href="#" className="button-expand-option">
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <ul>
                    <li className="menu-item fly-right">
                      <a href="my-account.html">
                        <i className="fa fa-user"></i>My Account
                      </a>
                    </li>
                    <li className="menu-item fly-right">
                      <a href="wishlist.html">
                        <i className="fa fa-heart-o"></i>Wishlist
                      </a>
                    </li>
                    <li className="menu-item noo-menu-item-cart minicart">
                      <a className="cart-button" href="cart.html">
                        <i className="fa fa-shopping-cart"></i>Cart
                      </a>
                    </li>
                    <li className="menu-item fly-right">
                      <a
                        id="noo-search"
                        className="search-button noo-search"
                        href="#"
                      >
                        <i className="fa fa-search"></i>Search
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="pull-right noo-main-menu">
                  <ul className="nav-collapse navbar-nav">
                    <li className="menu-item-has-children current-menu-item">
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/about">
                        <a>Our Story</a>
                      </Link>
                    </li>
                    <li className="menu-item-has-children noo_megamenu mega-col-columns-4">
                      <a href="/shop">Products</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#">Shop page</a>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/shop-list">
                                <a>Shop List</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop-detail">
                                <a>Shop Detail</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/my-account">
                                <a>My Account</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/cart">
                                <a>Cart</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/cart-empty">
                                <a>Empty Cart</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/wishlist">
                                <a>Wishlist</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <div className="noo_megamenu_widget_area">
                            <div className="widget commerce widget_products">
                              <h3 className="widget-title">Products</h3>
                              <ul className="product_list_widget">
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_1.png"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        French Bread
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;10.00</span>
                                </li>
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_2.png"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        Cookie
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;15.00</span>
                                </li>
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_3.png"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        Brown Bread
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;12.00</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="noo_megamenu_widget_area">
                            <div className="widget commerce widget_products">
                              <h3 className="widget-title">Featured</h3>
                              <ul className="product_list_widget">
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_4.jpg"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        French Bread
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;10.00</span>
                                </li>
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_2.png"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        Cookie
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;15.00</span>
                                </li>
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_5.jpg"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        Brown Bread
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;12.00</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="noo_megamenu_widget_area">
                            <div className="widget commerce widget_products">
                              <h3 className="widget-title">Sales</h3>
                              <ul className="product_list_widget">
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_1.png"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        French Bread
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;10.00</span>
                                </li>
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_2.png"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        Cookie
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;15.00</span>
                                </li>
                                <li>
                                  <Link href="/shop-detail">
                                    <a>
                                      <img
                                        width="100"
                                        height="100"
                                        src={base_url + "assets/images/product/thumb/product_3.png"}
                                        alt=""
                                      />
                                      <span className="product-title">
                                        Brown Bread
                                      </span>
                                    </a>
                                  </Link>
                                  <span className="amount">&#8377;12.00</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/become-seller">
                        <a>BECOME SELLER</a>
                      </Link>
                    </li>

                    <li>
                      <a href="mailto:info@kumbaya.in">BULK ORDER</a>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="search-header5">
          <div className="remove-form"></div>
          <div className="container">
            <form className="form-horizontal">
              <label className="note-search">
                Type and Press Enter to Search
              </label>
              <input
                type="search"
                name="s"
                className="form-control"
                defaultValue=""
                placeholder="Search..."
              />
              <input type="submit" defaultValue="Search" />
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
