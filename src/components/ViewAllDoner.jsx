import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewAllDoner = () => {
    const[data,changeData] = useState([])

    const fetchData = () => {
    axios.get("https://host-demo-app.onrender.com/api/donors").then(
        (response) => (
            changeData(response.data)
        )

    ).catch(
        (error) => {
            console,log(error)

        }
        )
    }

    useEffect(
        () => (
            fetchData()
        ),[]
    )
        
  return (
    <div>
        
        <div className="container mt-5">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">

                        <table className="table table-striped table-hover table-bordered align-middle text-center">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>ID</th>
                                                <th>Doner Name</th>
                                                <th>Age</th>
                                                <th>Branch</th>
                                                <th>Gender</th>
                                                <th>Blood Group</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>weight in KG</th>
                                                <th>Last Donation Date</th>
                                                <th>Created At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(
                                                (value, index) => {
                                                    return (
                                                        <tr>
                                                            <th>{value.id}</th>
                                                            <th>{value.donor_name}</th>
                                                            <th>{value.age}</th>
                                                            <th>{value.gender}</th>
                                                            <th>{value.blood_group}</th>
                                                            <th>{value.phone}</th>
                                                            <th>{value.email}</th>
                                                            <th>{value.city}</th>
                                                            <th>{value.weight_kg}</th>
                                                            <th>{value.last_donation_date}</th>
                                                            <th>{value.created_at}</th>
                                                        </tr>
                                                    )
                                                }
                                            )}




                                        </tbody>
                                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
export default ViewAllDoner