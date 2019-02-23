import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default class Toastify extends Component {
  toastId = null;

  notify = () => {
      console.log("on notify")
      this.toastId = toast("Lukas fait du front", {
          autoClose: false,
          type: toast.TYPE.ERROR,
          autoClose: 3000
      })

  };

  update = () => {
    console.log("on update")
    toast.update(this.toastId, {
          type: toast.TYPE.ERROR,
          autoClose: 5000
      });
  }

  render(){
      return (
        <div>
          <button onClick={this.notify}>Notify</button>
          <button onClick={this.update}>Update</button>
          <ToastContainer />
        </div>
      )
  }
}