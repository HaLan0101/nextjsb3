const apiUrl = "http://localhost:1337/api";
export default{
    getProducts(){
        return fetch(`${apiUrl}/products?populate=*`)
        .then((res) => res.json());
        },
    getProduct(id){
        return fetch(`${apiUrl}/products/${id}?populate=*`)
        .then((res) => res.json());
        }
}
