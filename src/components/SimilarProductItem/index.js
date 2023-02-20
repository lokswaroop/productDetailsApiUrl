// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {similarProductDetails} = props
  const {title, brand, imageUrl, rating, price} = similarProductDetails

  return (
    <li>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
      <p>{brand}</p>
      <div>
        <p>Rs{price}/-</p>
        <div>
          <p>{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png "
            alt="star"
            className="starImage"
          />
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
