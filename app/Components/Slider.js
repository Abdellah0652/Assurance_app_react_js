import React, { useEffect } from "react"

function Slider() {
  return (
    <>
      <section className="product-tab">
        <div className="container">
          <div className="row">
            <div id="parentVerticalTab">
              <h2>Products</h2>
              <ul className="resp-tabs-list hor_1 col-sm-3 col-md-3 col-lg-3">
                <li>
                  <i className="ti-home"></i> House Insurance
                </li>
                <li>
                  <i className="fa fa-plane"></i> Travel Insurance
                </li>
                <li>
                  <i className="ti-heart-broken"></i> Life Insurance
                </li>
                <li>
                  <i className="ti-car"></i> Car Insurance
                </li>
              </ul>
              <div className="col-sm-5 col-md-5 col-lg-5 resp-tabs-container hor_1">
                <div>
                  <div className="prod-tab-content">
                    <h4>
                      <span className="prod-cion">
                        <i className="ti-home"></i>
                      </span>
                      House Insurance
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non, volutpat vel tortor. Integer</p>
                    <p>et placerat suscipit. Sed sodales scelerisque commodo. Nam porta cursus lectus. </p>
                    <p className="tel">
                      <i className="fa fa-phone"></i> +123 456 7890 <span>Toll Free</span>
                    </p>
                    <p>
                      <a className="btn-default" href="product-houseinsurance.html">
                        Get Free Quote
                      </a>
                    </p>
                  </div>
                  <img src="assets/images/product-img.jpg" alt="" className="img-responsive" />
                </div>
                <div>
                  <div className="prod-tab-content">
                    <h4>
                      <span className="prod-cion">
                        <i className="fa fa-plane"></i>
                      </span>
                      Travel Insurance
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non, volutpat vel tortor. Integer</p>
                    <p>et placerat suscipit. Sed sodales scelerisque commodo. Nam porta cursus lectus. </p>
                    <p className="tel">
                      <i className="fa fa-phone"></i> +123 456 7890 <span>Toll Free</span>
                    </p>
                    <p>
                      <a className="btn-default" href="#">
                        Get Free Quote
                      </a>
                    </p>
                  </div>
                  <img src="assets/images/1.jpg" alt="" className="img-responsive" />
                </div>
                <div>
                  <div className="prod-tab-content">
                    <h4>
                      <span className="prod-cion">
                        <i className="ti-heart-broken"></i>
                      </span>
                      Life Insurance
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non, volutpat vel tortor. Integer</p>
                    <p>et placerat suscipit. Sed sodales scelerisque commodo. Nam porta cursus lectus. </p>
                    <p className="tel">
                      <i className="fa fa-phone"></i> +123 456 7890 <span>Toll Free</span>
                    </p>
                    <p>
                      <a className="btn-default" href="#">
                        Get Free Quote
                      </a>
                    </p>
                  </div>
                  <img src="assets/images/3.jpg" alt="" className="img-responsive" />
                </div>
                <div>
                  <div className="prod-tab-content">
                    <h4>
                      <span className="prod-cion">
                        <i className="ti-car"></i>
                      </span>
                      Car Insurance
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non, volutpat vel tortor. Integer</p>
                    <p>et placerat suscipit. Sed sodales scelerisque commodo. Nam porta cursus lectus. </p>
                    <p className="tel">
                      <i className="fa fa-phone"></i> +123 456 7890 <span>Toll Free</span>
                    </p>
                    <p>
                      <a className="btn-default" href="#">
                        Get Free Quote
                      </a>
                    </p>
                  </div>
                  <img src="assets/images/2.jpg" alt="" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider
