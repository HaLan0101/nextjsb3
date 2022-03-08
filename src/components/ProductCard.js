import Link from "next/link";
import Button from "../components/Button";

const Productcard = (props) => {
  
  const addTocart = (element) => { 
    const cartArray = [];
    if (localStorage.getItem('cart')) {
        const localStorageCart = JSON.parse(localStorage.getItem('cart'));
        localStorageCart.forEach(product => {
            cartArray.push(product);    
        });
        cartArray.push(element);
        console.log(cartArray);
        localStorage.setItem('cart', JSON.stringify(cartArray));
    }
    else {
        cartArray.push(element);
        localStorage.setItem('cart', JSON.stringify(cartArray));
    }
};
    return (
        <div className="product__card">
              <div className="product__img">
                <img src={`http://localhost:1337${props.product.attributes.Image.data[0].attributes.url}`} alt={props.product.attributes.Title} />
              </div>
              <div className="product__data">
                <h2>{props.product.attributes.Title}</h2>
                <p>{props.product.attributes.Price} € </p>
                <p>
                  <Link href={`/shop/${props.product.id}`}>
                  {/* <Link href={'/shop/' + props.product.id} */}
                    <a>
                      Voir le produit
                    </a>
                  </Link>
                  <Button title="ajouter au panier" function={()=> addTocart(props.product) } type="button" classes="btn btn__color-black"/>
                </p>
              </div>
            </div>
    );
}

export default Productcard;