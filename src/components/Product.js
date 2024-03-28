import styles from "./Product.module.css";

import { useState } from "react";

import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState(2.99);
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };
  const handlerAddProduct = () => {
    const total_price = (price * count * (100 - discount)) / 100;
    const newItem = {
      name: name,
      price: price,
      quantity: count,
      discount: discount,
      total_price: total_price,
    };
    console.log("newItem", newItem);
    const newList = [...list, newItem];

    let sum = sumTotal + newItem.total_price;
    setSumTotal(sum);

    setList(newList);
    console.log(newList);
  };

  return (
    <div className={styles.container}>
      <Card
        name={name}
        handlerMinus={handlerMinus}
        count={count}
        handlerPlus={handlerPlus}
        price={price}
        discount={discount}
        handlerAddProduct={handlerAddProduct}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
      />
      {/* <div className={styles.name}>{name}</div>
      <div className={styles.counter}>
        <Button label="➖" onClick={handlerMinus} />
        <span className={styles.count}>{count}</span>
        <Button label="➕" onClick={handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${price}`} each</div>
      <div className={styles.discount}>{`Discount: ${discount}%`}</div>
      <div className={styles.form}>
        <Input value={name} label="Product Name" onChange={handlerChangeName} />
        <Input value={price} label="Price" onChange={handlerChangePrice} />
      </div>
      <Button label="Add Product" onClick={handlerAddProduct} /> */}
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
