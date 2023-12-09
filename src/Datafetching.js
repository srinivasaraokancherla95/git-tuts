import React, { Component } from 'react'

export default class DataFetching extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((resp) => this.setState({ data: resp }))
    }

    render() {
        return (
            <table  border="2px" paddin="10px" height="100px" width="50%px">
                {this.state.data.map((table) => {
                    return ( 
                        < >
                            <tr>
                            <td>{table.id}</td>
                                <td>{table.title}</td>
                                <td>{table.body}</td>
                            </tr>
                                
                            
                            
                        </>
                    )
                })}
            </table>
        )
    }
}

