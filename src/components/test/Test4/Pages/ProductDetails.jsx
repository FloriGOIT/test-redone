import products from "../helper";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
        const prodParam = useParams();
        const item = products.filter(product => product.id === prodParam.id);

        console.log("item", item)
        return (
                
                <div>
                        <h3>Product detaile below: </h3><br/>
                        <span>Product id is <b style={{color:"brown", fontWeight:900}}>{item[0].id}</b> under the name <b style={{color:"brown",fontWeight:900}}>{item[0].name}</b>.</span>
        </div>)
}

export default ProductDetails