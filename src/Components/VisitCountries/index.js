import {Component} from 'react'

import Countries from '../Countries'
import VisitedCountry from '../VisitedCountry'

import './index.css'

class VisitCountries extends Component {
  constructor(props) {
    super(props)
    this.state = {countriesList: props.ListOfCountries}
  }

  clickVisitBtn = id => {
    this.setState(privwesValue => ({
      countriesList: privwesValue.countriesList.map(echValue => {
        if (echValue.id === id) {
          return {...echValue, isVisited: true}
        }
        return echValue
      }),
    }))
  }

  removeItem = id => {
    this.setState(privwesValue => ({
      countriesList: privwesValue.countriesList.map(echValue => {
        if (echValue.id === id) {
          return {...echValue, isVisited: false}
        }
        return echValue
      }),
    }))
  }

  render() {
    const {countriesList} = this.state
    const VisitedCountryList = countriesList.filter(
      echValue => echValue.isVisited === true,
    )
    return (
      <div className="bg-color">
        <h1 className="first-heading">Countries</h1>
        <ul className="un-list-vist">
          {countriesList.map(echValue => (
            <Countries
              listOfCountries={echValue}
              key={echValue.id}
              clickVisitBtn={this.clickVisitBtn}
            />
          ))}
        </ul>
        <h1 className="second-heading">Visited Countries</h1>
        {VisitedCountryList.length !== 0 ? (
          <ul className="un-list-visited">
            {VisitedCountryList.map(echValue => (
              <VisitedCountry
                listOfVisited={echValue}
                key={echValue.id}
                removeItem={this.removeItem}
              />
            ))}
          </ul>
        ) : (
          <p className="zero-length">No Countries Visited Yet!</p>
        )}
      </div>
    )
  }
}

export default VisitCountries
