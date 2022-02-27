import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TitlePage from "../../../components/TitlePage";
import ProductPrice from "../../../components/ProductPrice";
import Button from "../../../components/Button";

const Index = () => {
  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    const id = router.query.id;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch(err=>console.log(err))
  }, []);

    
    const addTocart = (element) => { 
        const cartArray = [];
        // on crée un nouvel objet avec une nouelle propriété quantity
        let productToInsert={
          id: element.id,
          quantity: 1,
          title: element.title,
          image: element.image,
          price:element.price
        };
      
        //si j'ai déjà un ou des produits dans mon localstorage
        if (localStorage.getItem('cart')) {
            const localStorageCart = JSON.parse(localStorage.getItem('cart'));
            localStorageCart.forEach(product => {
                cartArray.push(product);    
            });
            const indexOfExistingProduct= cartArray.findIndex((el) => el.id === element.id);
            if(indexOfExistingProduct!==-1){
              cartArray[indexOfExistingProduct].quantity++;
            }
            else{
              cartArray.push(productToInsert);
            }
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }

        //si localstorage vide
        else {
            cartArray.push(productToInsert);
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
  };

  return (
    <div className="product_page">
      <TitlePage title={product && product.title} />
      <div className="text__center">
        <ProductPrice price={product && product.price} currency="€" />
        <Button
          type="button"
          classes="btn btn__color-black"
          function={() => addTocart(product)}
          title="ajouter au panier"
        />
      </div>
    </div>
  );
};

export default Index;
