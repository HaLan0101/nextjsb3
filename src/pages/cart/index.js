import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const Index = () => {
  const [cart, setCart] = useState();

    const deleteCart = () => {
        localStorage.removeItem('cart');
        setCart(null);
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
const getTotalPrice = () => {
  return cart.reduce(
  (accumulator, cartItem) => accumulator + (cartItem.quantity * cartItem.price),0 );}; // 0 -> valeur initial
function handleRemove(id) {
  const newList = cart.filter((cartItem) => cartItem.id !== id);
  setCart(newList);
}
const incrementQty=(product) =>{
  const indexOfExistingProduct= cart.findIndex((el) => el.id === product.id);
    if(indexOfExistingProduct!==-1){
      cart[indexOfExistingProduct].quantity+=1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem('cart')));
}
const decrementQty=(product)=>{
  const indexOfExistingProduct= cart.findIndex((el) => el.id === product.id);
    if(indexOfExistingProduct!==-1 && cart[indexOfExistingProduct].quantity>1){
      cart[indexOfExistingProduct].quantity-=1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(JSON.parse(localStorage.getItem('cart')));
}


  return (
    <div className="page__cart">
      {cart ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>{cartItem.title}</td>
                  <td>{cartItem.price}</td>
                  <td>
                    <button onClick={() => decrementQty(cartItem)}>-</button>                   
                    {cartItem.quantity}
                    <button onClick={() => incrementQty(cartItem)}>+</button>
                    </td>
                  <td>{(cartItem.price * cartItem.quantity).toFixed(2)}</td>
                  {}
                  <td><button onClick={() => handleRemove(cartItem.id)} >Supprimer</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total : {getTotalPrice().toFixed(2)}</p>
          <Button
            title="Supprimer le panier"
            classes="btn btn__color-white"
            type="button"
            function={deleteCart}
          />
        </>
      ) : (
        <p className="text__center">Votre panier est vide</p>
      )}
    </div>
  );
};

export default Index;
