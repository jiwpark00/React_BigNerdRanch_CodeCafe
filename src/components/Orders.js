import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemType from '../types/item';
import './Orders.css';

function Orders({ items }) {
  const [orders, setOrders] = useState([]);

  useEffect(
    () => {
      axios.get('/api/orders')
        .then((result) => setOrders(result.data))
        .catch(console.error);
    },
    [],
  );
  return (
    <div className="orders-component">
      <h2>Existing Orders</h2>
      {orders.length === 0
        ? <div>No Orders</div>
        : orders.map((order) => (
          <div className="order" key={order.id}>
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>ZIP Code</th>
                  {order.phone && <th>Phone</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{order.name}</td>
                  <td>{order.zipCode}</td>
                  {order.phone && <td>{order.phone}</td>}
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.itemId}>
                    <td>{item.quantity}</td>
                    <td>{items.find((i) => i.itemId === item.itemId)?.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
}

Orders.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Orders;
