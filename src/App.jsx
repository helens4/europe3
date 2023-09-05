import France from './assets/countries/france.jpeg'
import Germany from './assets/countries/germany.jpeg'
import Belgium from './assets/countries/belgium.jpeg'
import Spain from './assets/countries/spain.jpeg'
import Netherlands from './assets/countries/netherland.jpg'
import Header from './components/Header'
import "./App.css"
import Post from './components/Post'
import SelectedItem from './components/SelectedItem'
import { useState } from 'react'


function App() {

  const countries = [
    {
      id: 1,
      image: France,
      name: 'France'
    },
    {
      id: 2,
      image: Germany,
      name: "Germany"
    },
    {
      id: 3,
      image: Belgium,
      name: "Belgium"
    },
    {
      id: 4,
      image: Spain,
      name: "Spain"
    },
    {
      id: 5,
      image: Netherlands,
      name: "Netherlands"
    }
  ]

  const [selectedCountry, setSelectedCountry] = useState(countries[0])


  return (
    <div>
      <Header />
      <div className="app-content">
        <ul className="post-list">
          {
            countries.map(country => (
              <Post
                key={country.id}
                country={country}
                setSelectedCountry={setSelectedCountry}
              />
            ))
          }
        </ul>
        <SelectedItem
          image={selectedCountry.image}
          name={selectedCountry.name}
        />
      </div>
    </div>
  )
}

export default App
