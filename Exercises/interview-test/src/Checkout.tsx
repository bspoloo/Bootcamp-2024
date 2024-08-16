import { useEffect, useState } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService';
// import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

interface productProps {
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  total: number;
  onQuantityChange: (id: number, quantity: number) => void;
}
type Product = {
  id: number;
  name: string;
  price: number;
  availableCount: number;
};

const Product = ({ id, name, availableCount, price, orderedQuantity, total, onQuantityChange }: productProps) => {

  const plusOrder = () => {
    if (orderedQuantity < availableCount) {
      onQuantityChange(id, orderedQuantity + 1);
    }
  }
  const minusOrder = () => {
    if (orderedQuantity > 0) {
      onQuantityChange(id, orderedQuantity - 1);
    }
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price.toFixed(2)}</td>
      <td>{orderedQuantity}</td>
      <td>${total.toFixed(2)}</td>
      <td>
        <button className={styles.actionButton} onClick={plusOrder}>+</button>
        <button className={styles.actionButton} onClick={minusOrder}>-</button>
      </td>
    </tr>
  );
}


const Checkout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totals, setTotals] = useState<number[]>([]);
  const [quantity, setQuantity] = useState<number[]>([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const productList = await getProducts();
      setProducts(productList);
      const zeros = new Array(productList.length).fill(0);
      setTotals(zeros);
      setQuantity(zeros);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    calculateOrderSummary();
  }, [totals]);

  const calculateOrderSummary = () => {
    const total = totals.reduce((acc, current) => acc + current, 0);
    let discountAmount = 0;
    if (total > 1000) {
      discountAmount = total * 0.1; // 10% discount
    }
    setOrderTotal(total - discountAmount);
    setDiscount(discountAmount);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    setQuantity(prev => {
      const newQuantities = [...prev];
      newQuantities[id - 1] = newQuantity;
      return newQuantities;
    });
    setTotals(prev => {
      const newTotals = [...prev];
      newTotals[id - 1] = newQuantity * (products[id - 1]?.price || 0);
      return newTotals;
    });
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      {isLoading ? <LoadingIcon /> : (
        <main>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th># Available</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  availableCount={product.availableCount}
                  price={product.price}
                  orderedQuantity={quantity[index]}
                  total={totals[index]}
                  onQuantityChange={updateQuantity}
                />
              ))}
            </tbody>
          </table>
          <h2>Order summary</h2>
          {discount > 0 && <p>Discount: ${discount.toFixed(2)}</p>}
          <p>Total: ${orderTotal.toFixed(2)}</p>
        </main>
      )}

    </div>
  );
};

export default Checkout;