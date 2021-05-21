import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import Link from 'next/link';

function MainMenu ( props ) {
    const [ path, setPath ] = useState( "" );
    const { showBlog = false } = props;

    useEffect( () => {
        setPath( window.location.href );
    } )

    useEffect( () => {
        let mainNav = document.querySelector( ".header .main-nav .menu" );
        if ( mainNav.querySelector( ".active" ) )
            mainNav.querySelector( ".active" ).classList.remove( "active" );
    }, [] )

    return (
        <nav className="main-nav">
            <ul className="menu sf-js-enabled sf-arrows">
                <li className={ path === process.env.PUBLIC_URL + '/' ? 'active' : '' }>
                    <Link href={ `${process.env.PUBLIC_URL}/` }><a title='αρχική'></a></Link>
                </li>
                <li className={ path.indexOf( "categories/" ) > -1 ? 'active' : '' }>
                    {/* βελάκι κάτω = sf-with-ul , το βάζω στο className to <Link>*/}
                    <Link href={ `${process.env.PUBLIC_URL}/categories/full-width` }>
                        <a className="">
                        ΣΥΣΚΕΥΕΣ
                        </a>
                    </Link>
                    <div className="megamenu">
                        <div className="row row-sm">
                            <div className="col-lg-4">
                                <Link href="#" ><a className="nolink"> VARIATION 1</a></Link>
                                <ul className="submenu">
                                    {/* <li><Link to={ `${process.env.PUBLIC_URL}/categories/full-width` }>Fullwidth Banner</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/boxed-slider` }>Boxed Slider Banner</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/boxed-image` }>Boxed Image Banner</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/sidebar-left` }>Left Sidebar</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/sidebar-right` }>Right Sidebar</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/flex-grid` }>products Flex Grid</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/horizontal-filter1` }>Horizontal Filter1</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/horizontal-filter2` }>Horizontal Filter2</Link></li> */}
                                </ul>
                            </div>
                            <div className="col-lg-4">
                            <Link href="#" ><a className="nolink"> VARIATION 2</a></Link>
                                <ul className="submenu">
                                    {/* <li><Link to={ `${process.env.PUBLIC_URL}/categories/list` }>products List Item Types</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/infinite-scroll` }>Ajax Infinite Scroll</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/3cols` }>3 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/4cols` }>4 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/5cols` }>5 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/6cols` }>6 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/7cols` }>7 Columns products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/categories/8cols` }>8 Columns products</Link></li> */}
                                </ul>
                            </div>
                            <div className="col-lg-4 image-container">
                                <img className="products-promo" src={ `${process.env.PUBLIC_URL}/assets/images/menu-banner-2.jpg` } width="380" height="614" alt="Menu banner" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className={ path.indexOf( "products/" ) > -1 ? 'active' : '' }>
                    <Link href={ `${process.env.PUBLIC_URL}/products/default/1` }><a className="">ΑΞΕΣΟΥΑΡ</a></Link>
                    <div className="megamenu">
                        <div className="row row-sm">
                            <div className="col-lg-4">
                                <Link href={ `${process.env.PUBLIC_URL}/products/horizontal/1` }><a className="nolink">Variations 1</a></Link>
                                <ul className="submenu">
                                    {/* <li><Link to={ `${process.env.PUBLIC_URL}/products/horizontal/1` }>Horizontal Thumbnails</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/vertical/1` }>Vertical Thumbnails</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/zoom/1` }>Inner Zoom</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/cart-sticky/1` }>Addtocart Sticky</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/accordion/1` }>Accordion Tabs</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/sticky-tab/1` }>Sticky Tabs</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/simple/1` }>Simple products</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/sidebar-left/1` }>With Left Sidebar</Link></li> */}
                                </ul>
                            </div>

                            <div className="col-lg-4">
                                <Link href={ `${process.env.PUBLIC_URL}/products/default/1` }><a className="nolink">products Layout Types</a></Link>
                                <ul className="submenu">
                                    {/* <li><Link to={ `${process.env.PUBLIC_URL}/products/default/1` }>Default Layout</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/extended/1` }>Extended Layout</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/full-width/1` }>Full Width Layout</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/grid/1` }>Grid Images Layout</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/sticky-both/1` }>Sticky Both Side Info</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/products/sticky-info/1` }>Sticky Right Side Info</Link></li> */}
                                </ul>
                            </div>

                            <div className="col-lg-4 image-container">
                                <img className="products-promo" src={ `${process.env.PUBLIC_URL}/assets/images/menu-banner-1.jpg` } width="380" height="614" alt="Menu banner" />
                            </div>
                        </div>
                    </div>
                </li>

                <li className={ `sf-with-ul ${path.indexOf( "pages/" ) > -1 ? 'active' : ''}` }>
                    <Link href={ `${process.env.PUBLIC_URL}/pages/cart` } >
                        <a className="">B STOCK</a>
                    </Link>
                    <ul>
                        <li>
                            <Link href={ `${process.env.PUBLIC_URL}/pages/cart` }>
                                <a>Shopping Cart</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/one` }>
                                <a className="sf-with-ul">
                                Checkout
                                </a>
                            </Link>
                            <ul>
                                <li><Link href={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/one` }><a>Checkout Shipping</a></Link></li>
                                <li><Link href={ `${process.env.PUBLIC_URL}/pages/checkout/shipping/two` }><a>Checkout Shipping 2</a></Link></li>
                                <li><Link href={ `${process.env.PUBLIC_URL}/pages/checkout/review` }><a>Checkout Review</a></Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link href={ `${process.env.PUBLIC_URL}/pages/dashboard/board` }>
                                <a className="sf-with-ul">
                                Dashboard
                                </a>
                            </Link>
                            <ul>
                                <li><Link href={ `${process.env.PUBLIC_URL}/pages/dashboard/board` }><a>Dashboard</a></Link></li>
                                <li><Link href={ `${process.env.PUBLIC_URL}/pages/dashboard/account` }><a>My Account</a></Link></li>
                            </ul>
                        </li>
                        <li><Link href={ `${process.env.PUBLIC_URL}/pages/about` }><a>About Us</a></Link></li>
                        <li><Link href={ `${process.env.PUBLIC_URL}/pages/blog` } ><a className="sf-with-ul">Blog</a></Link>
                            <ul>
                                <li><Link href={ `${process.env.PUBLIC_URL}/pages/blog` }><a>Blog</a></Link></li>
                                <li><Link href={ `${process.env.PUBLIC_URL}/pages/single/2` }><a>Blog Post</a></Link></li>
                            </ul>
                        </li>
                        <li><Link href={ `${process.env.PUBLIC_URL}/pages/wishlist` }><a>Wishlist</a></Link></li>
                        <li><Link href={ `${process.env.PUBLIC_URL}/pages/login` } ><a className="login-link">Login</a></Link></li>
                        <li><Link href={ `${process.env.PUBLIC_URL}/pages/password` }><a>Forgot Password</a></Link></li>
                    </ul>
                </li>
                {
                    showBlog ?
                        <li><Link href={ `${process.env.PUBLIC_URL}/pages/blog` }><a className="d-none d-xl-inline-block">Blog</a></Link></li>
                        : ""
                }
             
            </ul>
        </nav>
    )

}

export default MainMenu;