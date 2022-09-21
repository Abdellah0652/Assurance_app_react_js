import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ReactDOM from "react-dom/client"
import Footer from "./Components/Footer"
import HomeAuto from "./Components/HomeAuto"
import Header from "./Components/Header"
import Slider from "./Components/Slider"
import AutoForm from "./Components/AutoForm"
import HomeSlider from "./Components/HomeSlider"
function Main() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Slider" element={<Slider />} />
          <Route path="/AutoForm" element={<AutoForm />} />
          <Route path="/HomeSlider" element={<HomeSlider />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Main
const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
