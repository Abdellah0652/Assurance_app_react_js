import React, { useEffect } from "react"
import Axios from "axios"
import { useState } from "react"

function HomeSlider() {
  // form states
  const [Moto, setMoto] = useState("")

  // retrived data state
  const [data, setData] = useState([])

  // submit event
  const Store_infos = e => {
    e.preventDefault()
    console.log("------>", Moto)

    // our object to pass
    const data = {
      Moto: Moto
    }
    Axios.post("https://sheet.best/api/sheets/4df42063-ec87-4f1a-9bdd-d2a26a783851", data).then(response => {
      console.log("data :----->", Moto)
      setMoto("")
    })
  }

  // getting data function
  const getData = () => {
    Axios.get("https://sheet.best/api/sheets/4df42063-ec87-4f1a-9bdd-d2a26a783851").then(response => {
      setData(response.data)
    })
  }

  // triggering function
  useEffect(() => {
    getData()
  }, [data])
  return (
    <>
      <section className="flexslider">
        <ul className="slides">
          <li>
            <img src="assets/images/slider-img.jpg" />
            <div className="slide-info">
              <div className="slide-con">
                <b>Autozzzz</b>
                <h3>Health Insurance</h3>
                <form onSubmit={Store_infos} method="post">
                  <select onChange={e => setMoto(e.target.value)} value={Moto} name="Moto" id="" className="btn">
                    {" "}
                    <option value="Moi ">Moi </option>
                    <option value="Mon couple ">Mon couple </option>
                    <option value="Mon couple et mes enfants ">Mon couple et mes enfants </option>
                    <option value="Mes enfants et Moi ">Mes enfants et moi </option>
                  </select>

                  <button type="submit" className="Cmp">
                    Compare
                  </button>
                </form>
              </div>
            </div>
          </li>
          <li>
            <img src="assets/images/slider-img1.jpg" />
            <div className="slide-info">
              <div className="slide-con">
                <b>Lifecare</b>
                <h3>Life Insurance</h3>
                <form action="">
                  <select name="moto" id="" className="btn">
                    {" "}
                    <option value="Moi">Moi </option>
                    <option value="Mon couple ">Mon couple </option>
                    <option value="Mon couple et mes enfants ">Mon couple et mes enfants </option>
                    <option value="Mes enfants et Moi ">Mes enfants et moi </option>
                  </select>

                  <button className="Cmp btn">Compare</button>
                </form>
              </div>
            </div>
          </li>
          <li>
            <img src="assets/images/slider-img2.jpg" />
            <div className="slide-info">
              <div className="slide-con">
                <b>Healthcare</b>
                <h3>Travel Insurance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit fringilla ligula, nec congue leo pharetra in.</p>
                <a href="#" className="ti-arrow-right"></a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default HomeSlider
