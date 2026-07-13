import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddDoner = () => {

const [input, changeInput] = useState({
  donor_name: "",
  age: "",
  gender: "",
  blood_group: "",
  phone: "",
  email: "",
  city: "",
  weight_kg: "",
  last_donation_date: ""
})

const inputHandler = (event) => {
  changeInput({ ...input, [event.target.name]: event.target.value })
}

const readValue = () => {

  console.log(input)

  axios.post("https://host-demo-app.onrender.com/api/add-donor", input).then(

    (response) => {

      console.log(response.data)

      alert("Donor Added Successfully")

    }
  ).catch(
    (error) => {
      console.log(error)
    }
  )

}

return (
  <div>

    <NavigationBar />
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-2">

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Doner Name</label>
              <input
                type="text"
                className="form-control"
                onChange={inputHandler}
                name="donor_name"
                value={input.donor_name}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Age</label>
              <input
                type="text"
                className="form-control"
                onChange={inputHandler}
                name="age"
                value={input.age}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Gender</label><br />
              <select
                className="form-control"
                onChange={inputHandler}
                name="gender"
                value={input.gender}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Blood Group</label><br />
              <select
                className="form-control"
                onChange={inputHandler}
                name="blood_group"
                value={input.blood_group}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                onChange={inputHandler}
                name="phone"
                value={input.phone}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={inputHandler}
                name="email"
                value={input.email}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                onChange={inputHandler}
                name="city"
                value={input.city}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Weight in kg</label>
              <input
                type="text"
                className="form-control"
                onChange={inputHandler}
                name="weight_kg"
                value={input.weight_kg}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label className="form-label">Last Donation Date</label>
              <input
                type="date"
                className="form-control"
                onChange={inputHandler}
                name="last_donation_date"
                value={input.last_donation_date}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <button className="btn btn-primary" onClick={readValue}>
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default AddDoner