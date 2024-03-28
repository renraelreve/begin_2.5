// ViewList.js

import styles from "./ViewList.module.css";

function ViewList({ list, sum }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{`${item.discount}%`}</td>
              <td>{item.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Sum = {sum.toFixed(2)}</h3>
    </div>
  );
}
export default ViewList;
