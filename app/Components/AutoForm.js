import React, { useEffect } from "react"

function AutoForm() {
  return (
    <>
      <div className="_Container ">
        <div className="row">
          <section className="col-sm-5 col-md-4 col-lg-4">
            <div className="get-quote-form">
              <h2>Get a free quote form</h2>
              <form id="get-quote">
                <div className="form-select">
                  <select name="auto">
                    <option>Product</option>
                    <option>choix 2</option>
                  </select>
                </div>
                <div>
                  <textarea rows="1" cols="1" placeholder="Message"></textarea>
                </div>
                <div className="text-center">
                  <input type="submit" className="btn-default" value="Get Free Quote" />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default AutoForm
