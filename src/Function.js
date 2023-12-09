import React, { useState, useEffect } from 'react'

function Function() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((resp) => setData(resp))
    }, [])

    return (
      <table  border="2px" paddin="10px" height="100px" width="50%px">

        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>City</th>
        </tr>
            {data.map((row) => {
                return (
                    <>
                    
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td>{row.address.city}</td>
                        </tr>
                    </>
                )
            })}
        </table>
    )
}

export default Function
