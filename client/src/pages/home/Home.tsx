import "./home.scss"
import SearchBar from "../../components/searchbar/SearchBar"

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Explore your dream home with EstateExplorer - the ultimate search 
            tool to discover your perfect property, anywhere, anytime.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>12+</h1>
              <h2>Months of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Customers Gained</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Home