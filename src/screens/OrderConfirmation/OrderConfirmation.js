import { useEffect } from "react";
import "./order-confirm.scss";
import { Link } from "react-router-dom";
import OrderDetail from '../../components/OrderDetail/OrderDetail'


const OrderConfirmation = () => {

    useEffect(() => {

    }, [])




    return (
        <main class="mainContainer">
            <section class="cart-section">
                <div class="container">
                    <div class="cart-section-head">
                        <h2>ORDER CONFIRMED</h2>
                    </div>

                    <div class="checkout-body">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="thankyou-box">
                                    <div class="thankyou-box-detail">
                                        <i class="far fa-check-circle"></i>
                                        <h3>Thank you for your purchase!</h3>
                                        <section class="track-section">
                                            <div class="container">
                                                <OrderDetail />
                                            </div>
                                        </section>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}



export default OrderConfirmation;
