import './index.css'

const Countries = props => {
  const {listOfCountries, clickVisitBtn} = props
  const {name, isVisited, id} = listOfCountries

  const VisitBtn = () => {
    clickVisitBtn(id)
  }

  return (
    <li className="list-visit">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button className="btn" type="button" onClick={VisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default Countries
