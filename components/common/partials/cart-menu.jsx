import React from 'react';
// import { Link } from 'react-router-dom'

import Link from 'next/link';

import { connect } from 'react-redux';

import { removeFromCart } from '../../../action'
import { getCartTotal, getQtyTotal } from '../../../utils';

function CartMenu( props ) {
    const { cartItems, removeFromCart } = props;

    return (
        <div className="dropdown cart-dropdown">
            <Link href={ `${ process.env.PUBLIC_URL }/shop/cart` } role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title='καθάλι αγορών'>
                <a className="dropdown-toggle">
                    <i className="minicart-icon"></i>
                    { getQtyTotal( cartItems ) === 0 ? '': <span className="cart-count" title="προϊόντα στο καλάθι">{ getQtyTotal( cartItems ) }</span>}
                </a>
            </Link>

            <div className="dropdown-menu">
                <div className="dropdownmenu-wrapper">
                    <div className="dropdown-cart-header">
                        <span>{ cartItems.length } Items</span>
                        <Link href={ `${ process.env.PUBLIC_URL }/pages/cart` }>
                        <a className="float-right">
                            View Cart
                        </a>
                        </Link>
                    </div>

                    <div className="dropdown-cart-products">
                        {
                            cartItems.map( ( item, index ) => (
                                <div className="product" key={ "product" + index }>
                                    <div className="product-details">
                                        <h2 className="product-title">
                                            <Link href={ `${ process.env.PUBLIC_URL }/product-detail` }>
                                                <a>{ item.name }</a>
                                            </Link>
                                        </h2>
                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">{ item.qty }</span>
                                                x €{ item.salePrice ? item.salePrice.toFixed( 2 ) : item.price.toFixed( 2 ) }
                                        </span>
                                    </div>
                                    <figure className="product-image-container">
                                        <Link href={ `${ process.env.PUBLIC_URL }/products/default/${ item.id }` } >
                                            <a className="product-image">
                                             <img src={ `${ process.env.PUBLIC_URL }/${ item.pictures[ 0 ] }` } alt="product" />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                        <a className={ `btn-remove icon-cancel` } title="Remove Product" onClick={ ( e ) => { e.preventDefault(); removeFromCart( item ); } }>
                                            <i className="icon-retweet"></i>
                                        </a>
                                        </Link>
                                    </figure>
                                </div>
                            ) )
                        }
                    </div>
                    <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price float-right">€ { getCartTotal( cartItems ).toFixed( 2 ) }</span>
                    </div>
                    <div className="dropdown-cart-action">
                        <Link href={ `${ process.env.PUBLIC_URL }/pages/checkout/shipping/one` } >
                        <a className="btn btn-block btn-primary">
                            Checkout
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}


function mapStateToProps( state ) {
    return {
        cartItems: state.cartList.cart ? state.cartList.cart : []
    }
}

export default connect( mapStateToProps, { removeFromCart } )( CartMenu );