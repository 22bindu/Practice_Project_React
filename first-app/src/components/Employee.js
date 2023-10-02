import axios from 'axios';
import React, { Component } from 'react';

class Employee extends Component {  
    constructor(props) {
        super(props);
        this.state={
            user:[],
            errorMessage:""
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            this.setState({
                ...this.state,
                user:res.data
            })
        }).catch((error)=>{
            this.setState({
                ...this.state,
                errorMessage:error.message
            })
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">

                    <h3 className={'text-primary font-italic'}>CareerIT Team</h3>
                    <p className="lead mt-5 font-italic">Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Accusamus accusantium aperiam architecto 
                    assumenda blanditiis culpa distinctio ea earum eius expedita facere fugiat 
                    iste iure laboriosam laudantium molestiae, nesciunt officia officiis possimus 
                    quis quos ratione rem sunt tempora veniam voluptas, voluptate. Aliquid animi architecto ea 
                    inventore nisi perspiciatis quidem saepe.</p>
                    <table className={'table table-bordered table-striped table-hover table-responsive-md mt-5'}>
                        <thead className={'text-center bg-primary text-white'}>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>STREET</th>
                            <th>CITY</th>
                            <th>WEBSITE</th>
                        </thead>
                        <tbody className={'display-4'}>
                            {
                                this.state.user.length>0 ?
                                    <React.Fragment>
                                        {
                                            this.state.user.map(user=>{
                                                return(
                                                    <tr key={user.id}>
                                                        <td className={'display-5'}>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.address.street}</td>
                                                        <td>{user.address.city}</td>
                                                        <td>{user.website}</td>
                                                    </tr>
                                                );
                                            })
                                        }

                                    </React.Fragment>
                                    :null
                            }
                        </tbody>
                    </table>




 
                </div>
            </React.Fragment>
        );
    }
}


export default Employee;