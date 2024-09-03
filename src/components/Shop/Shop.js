import './Shop.css';
import fakeData from '../../fakeData/products.JSON';

const Shop = () => {
    const loadData =()=>JSON.parse(JSON.stringify(fakeData));
    return (
        <div>
            <h1>This is Shop</h1>
            <h2>{console.log(loadData)
            }</h2>
        </div>
    );
};

export default Shop;