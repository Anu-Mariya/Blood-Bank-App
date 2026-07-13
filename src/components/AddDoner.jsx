import axios from 'axios'
import React, { useState } from 'react'

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

//
const inputHandler = (event) => {

  // this line use cheyanath front endil user type cheyuna values apurath poyii store cheyanane for that we had linked the variable name and value here
  changeInput({...input,[event.target.name]: event.target.value})

}

const readValue = () =>{

console.log(input)

axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(

  (response)=>{

    console.log(response.data)

    alert("Course Added Succesfully")

  }
).catch(
  (error)=>{
    console.log(error)
  }
)

}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-col col-md-12 col-lg-col col-xl-12 col-xxl-12">
                    <div className="row g-2">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Doner Name</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="donor_name"
                            value={input.donor_name}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="age"
                            value={input.age}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label><br></br>
                           <select name="" id="" className="form control" onChange={inputHandler}
                            name="gender"
                            value={input.gender}>
                            <option value="">Male</option>
                            <option value="">Female</option>
                            <option value="">Others</option>
                           </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Blood Group</label><br></br>
                            <select name="" id="" className="form control" onChange={inputHandler}
                            name=" blood_group"
                            value={input. blood_group}>
                            <option value="">A</option>
                            <option value="">A-</option>
                            <option value="">B+</option>
                            <option value="">B-</option>
                            <option value="">AB+</option>
                            <option value="">AB-</option>
                            <option value="">0-</option>
                            <option value="">0+</option>
                           </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control"
                            onChange={inputHandler}
                            name="phone"
                            value={input.phone}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" 
                            onChange={inputHandler}
                            name="email"
                            value={input.email}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">City</label>
                            <input type="text" className="form-control"
                            onChange={inputHandler}
                            name="city"
                            value={input.city}
                             />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Weight in kg</label>
                            <input type="text" className="form-control" 
                            onChange={inputHandler}
                            name="weight_kg"
                            value={input.weight_kg}
                            />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Last Donation Date</label>
                            <input type="date" className="form-control"
                            onChange={inputHandler}
                            name="last_donation_date"
                            value={input.last_donation_date}
                             />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onclick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDoner