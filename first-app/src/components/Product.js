import React, { Component } from "react";
import Mainlayout from "../layout/Mainlayout";
import Employee from "./Employee";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProduct: "Product1",
      Product1: {
        id: "A123456",
        name: "JAVA",
        Image: "http://www.careerit.co.in/wp-content/uploads/2023/05/java.jpg",
        Qty: 1,
        price: 15000,
      },
      Product2: {
        id: "B789012",
        name: "PYTHON",
        Image: "https://www.ntuclearninghub.com/documents/51786/4216795/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476?t=1679043970578",
        Qty: 1,
        price: 10000,
      },
      Product3: {
        id: "C345678",
        name: "REACTJS",
        Image: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
        Qty: 1,
        price: 25000,
      },
    };
  }

  decrQty = () => {
    const activeProduct = this.state.activeProduct;
    this.setState((prevState) => ({
      [activeProduct]: {
        ...prevState[activeProduct],
        Qty: prevState[activeProduct].Qty - 1 > 1 ? prevState[activeProduct].Qty - 1 : 0,
      },
    }));
  };

  incrQty = () => {
    const activeProduct = this.state.activeProduct;
    this.setState((prevState) => ({
      [activeProduct]: {
        ...prevState[activeProduct],
        Qty: prevState[activeProduct].Qty + 1,
      },
    }));
  };

  handleButtonClick = (productName) => {
    this.setState({ activeProduct: productName });
  };

  render() {
    const activeProduct = this.state.activeProduct;
    const { id, name, Image, Qty, price } = this.state[activeProduct];

    return (
      <Mainlayout>
        <div className="container">
          <h1 className="display-6">Product details</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <img src={Image} alt="no-img" style={{ height: 50, width: 50 }} />
                </td>
                <td>
                  <i className="fa-solid fa-minus mx-3" onClick={this.decrQty}></i>
                  {Qty}
                  <i className="fa-solid fa-plus mx-3" onClick={this.incrQty}></i>
                </td>
                <td>{price}</td>
                <td>{Qty * price}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <button
              onClick={() => this.handleButtonClick("Product1")}
              className="btn btn-primary"
            >
              Show Product 1
            </button>
            <button
              onClick={() => this.handleButtonClick("Product2")}
              className="btn btn-primary"
            >
              Show Product 2
            </button>
            <button
              onClick={() => this.handleButtonClick("Product3")}
              className="btn btn-primary"
            >
              Show Product 3
            </button>
          </div>
        </div>
        <div>
         
        </div>
      </Mainlayout>
    );
  }
}

export default Product;
