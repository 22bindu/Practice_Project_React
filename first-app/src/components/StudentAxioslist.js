import React from "react";


let StudentAxioslist = (props) => {

    return(
      <React.Fragment>
          <div className="card">
              <div className="card-header bg-primary text-white">
                  <p className="h4 text-center">{props.selectedUser.name}</p>
              </div>
              <div className="card-body ">
                  <ul className={'list-group'}>
                      <li className={'list-group-item'}>
                          <p className="lead">ID : {props.selectedUser.id}</p>
                      </li>
                      <li className={'list-group-item'}>
                          <p className="lead">Name : {props.selectedUser.name}</p>
                      </li>
                      <li className={'list-group-item'}>
                          <p className="lead">Email : {props.selectedUser.email}</p>
                      </li>

                      <li className={'list-group-item'}>
                          <p className="lead">Website : {props.selectedUser.website}</p>
                      </li>
                  </ul>
              </div>
          </div>
      </React.Fragment>
  );
}
export default StudentAxioslist;
