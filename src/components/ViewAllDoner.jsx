import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllDoner = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => (
                changeData(response.data)
            )

        ).catch(
            (error) => {
                console.log(error)

            }
        )
    }

    useEffect(
        () => (
            fetchData()
        ), []
    )

    return (
        <div>

          <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

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
                                            <th>Weight in KG</th>
                                            <th>Last Donation Date</th>
                                            <th>Created At</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.map(
                                            (value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{value.id}</td>
                                                        <td>{value.donor_name}</td>
                                                        <td>{value.age}</td>
                                                        <td>{value.branch}</td>
                                                        <td>{value.gender}</td>
                                                        <td>{value.blood_group}</td>
                                                        <td>{value.phone}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.city}</td>
                                                        <td>{value.weight_kg}</td>
                                                        <td>{value.last_donation_date}</td>
                                                        <td>{value.created_at}</td>
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