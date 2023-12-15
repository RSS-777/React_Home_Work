import { Link } from 'react-router-dom';
import './ProductDetail.css'

export const ProductDetail = ({ product }) => {
    if (!product) return null;

    return (
        <div className="block-product-detail">
            <Link to="/" className='home-btn'>Home</Link>
            <h2>{product.title}</h2>
            <p><span>Brand:</span> {product.brand}</p>
            <p><span>Category:</span> {product.category}</p>
            <p><span>Discription:</span> {product.description}</p>
            <p><span>discountPercentage:</span> {product.discountPercentage}</p>
            <p><span>price:</span> {product.price}</p>
            <p><span>stock:</span> {product.stock}</p>
            <div className="container-images">
                {product.images.map((image, index) =>
                    <img src={image}
                        key={index}
                        alt='Images product'
                    />
                )}
            </div>
        </div>
    )
}

