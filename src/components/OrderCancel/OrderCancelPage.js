import { Link } from 'react-router-dom'
function OrderCancelPage() {
    return (
        <main class='mainContainer'>
            <section class='cart-section'>
                <div class='container'>
                    <div class='cart-section-head'>
                        <h2>ORDER CANCELED</h2>
                    </div>

                    <div class='checkout-body'>
                        <div class='row'>
                            <div class='col-lg-12 col-md-12'>
                                <div class='thankyou-box'>
                                    <div class='thankyou-box-detail'>
                                        <i class="fa fa-ban" aria-hidden="true"></i>
                                        <h3>Your Order Cannot be Place due to Payment issues!</h3>
                                        <Link className='btn btn-primary mt-5' to={"/"}>
                                            Continue Shopping
                                             </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OrderCancelPage
