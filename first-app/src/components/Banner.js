import React, { Component } from 'react';


class Banner extends Component {
    render() {
        return (
            <div className='container-fluid p-0'>
                <div className='banner-bg img-fluid '>
                <div className='d-flex flex-column justify-content-center align-items-center py-5'>
                <h1 className='display-4 text-white font-weight-bold'>WELCOME TO CAREERIT</h1>
                <h4 className='display-5 text-white '>Online Courses From
                    Experienced And Experts</h4>
                </div>
                </div>
            </div>
        );
    }
}

export default Banner;
