import './index.css'

const VisitedCountry = props => {
  const {listOfVisited, removeItem} = props
  const {name, imageUrl, id} = listOfVisited

  const clickRemoveBtn = () => {
    removeItem(id)
  }

  return (
    <li className="list-visited">
      <img src={imageUrl} className="flog-img" alt="thumbnail" />
      <div className="remove-container">
        <p className="name-of-country">{name}</p>
        <button className="remove-btn" type="button" onClick={clickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
