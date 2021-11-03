import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderList } from "../redux/Actions/OrderAction";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function OrderList() {
  const dispatch = useDispatch();
  const { user_id } = useSelector((state) => state.AuthReducer);
  console.log(`user_id`, user_id);
  const { orderListItems } = useSelector((state) => state.OrderReducer);
  useEffect(() => {
    if (user_id) {
      fetchOrders();
    }
  }, [user_id]);

  const fetchOrders = () => {
    dispatch(getOrderList(user_id));
  };

  return (
    <Container className='mt-5'>
      <table className='table table-bordered table-striped table-hover'>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Order Number</th>
            <th>Order Status</th>
            <th>Payments Status</th>
          </tr>
        </thead>
        <tbody>
          {orderListItems.length > 0 ? (
            orderListItems.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.order_number}</td>
                <td>{item.order_status}</td>
                <td>{item.payment_status ? item.payment_status : "pending"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colspan='4' className='text-center'>
                <h6>No Orders Found !!!</h6>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}

export default OrderList;
