import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Mainlayout from "../layout/Mainlayout";
import product from '../assets/images/product.png';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <Mainlayout>
      <div className="container">
        <div className="row mt-5 ">
          <div className="col-md-6 ">
            <h2 className="text-danger">Want to work with Us</h2>
            <p>
              Our training is completely practical oriented enabling
              student-trainer interaction. Our online training is given by real
              time professionals who have 10+ years of professional experience.
            </p>
           
            <p>
              Our training is completely practical oriented enabling
              student-trainer interaction. Our online training is given by real
              time professionals who have 10+ years of professional experience.
            </p>

            {/* <Link className='btn btn-danger btn-md' to={"/Product"}>Place order </Link> */}
          </div>
          <div className="col-md-4">
            <img className="pro-img" src={product} alt="" />
          </div>
        </div>

        <MDBFooter className="text-white text-center text-lg-left">
          <MDBContainer className="p-4">
            <MDBRow>
              <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Location</h5>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3031297979173!2d78.39227307471279!3d17.493037399753835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d680a39f1b%3A0xdd56fce386668ba2!2sCareer%20IT%20Software%20Trainings%20and%20Placements!5e0!3m2!1sen!2sin!4v1694538844587!5m2!1sen!2sin"
                  title="map"
                  width="400"
                  height="250"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </MDBCol>

              <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">contact details</h5>

                <div className="card">
                  <div className="card-body">
                    <div className="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="7989999992"
                      />
                    </div>
                    <Link className="nav-link btn btn-primary" to={'/'}>Submit</Link>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      </div>
    </Mainlayout>
  );
}
