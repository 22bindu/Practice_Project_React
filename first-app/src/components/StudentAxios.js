import React, { useEffect, useState } from "react";
import axios from "axios";
let StudentAxios = (props) => {
  let[users,setUsers]=useState([]);
  let[errorMessage,setErrorMessage]=useState('')
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then((res)=>{
              setUsers(res.data)
          })
          .catch((error)=>{
              setErrorMessage(error.message)
          })
  }, []);
  let selectUser=(user)=>{
      props.sendUser(user);
  }
  return(
      <React.Fragment>
          <table className="table table-bordered table-hover table-striped text-center" >
              <thead className={'bg-primary text-white'}>
              <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>STREET</th>
                  <th>CITY</th>
                  <th>WEBSITE</th>
              </tr>
              </thead>
              <tbody>
              {
                  users.length>0 ?
                      <React.Fragment>
                          {
                            users.map(user=>{
                                return(
                                        <tr key={user.id} onClick={selectUser.bind(this,user)} >
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.street}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.website}</td>
                                        </tr>

                                );
                            })
                          }
                      </React.Fragment> : null
              }
              </tbody>
          </table>
      </React.Fragment>
  );
}

export default StudentAxios;
