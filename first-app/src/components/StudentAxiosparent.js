import React, {useState} from "react";
import StudentAxioslist from './StudentAxioslist';
import StudentAxios from "./StudentAxios";
import Mainlayout from "../layout/Mainlayout";
import Student from "./Student";


let StudentAxiosparent=()=>{
    let[selectedUser,setSelectedUser]=useState({});
    let receiveUser=(user)=>{
        setSelectedUser(user);
    }
    return(
        <React.Fragment>
            <Mainlayout>
            <div className="container mt-3">
                <div className="row">
                    <p className="h4">User App</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nesciunt obcaecati reprehenderit similique totam. Aliquam corporis delectus distinctio et facere fuga impedit minus placeat repellendus tempora. Consequuntur omnis sunt voluptas.</p>
                    <div className="col-md-8">
                        <StudentAxios sendUser={receiveUser}/>
                    </div>
                    <div className="col-md-4">
                        <StudentAxioslist selectedUser={selectedUser} />
                    </div>
                </div>
            </div>
            <Student/>
            </Mainlayout>
        </React.Fragment>
    );
}
export default StudentAxiosparent;