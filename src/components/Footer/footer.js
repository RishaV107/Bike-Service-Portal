import React, { Component } from "react";
import "./footer.css";
import { Button, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  redirect = () => {
    window.location.href = "mailto:admin@ezyhelpers.com";
  };

  render() {
    return (
      <React.Fragment>

        <div className="footerContainer"  >

          <p className="footerHeading">
            Get notified about new updates from us!
          </p>
          <p className="footerSubHeading">
            Stay updated about our services & offers.
          </p>
          <div>
            <Input placeholder="Email" className="footerInput shadow" />
            <Button
              className="emailLink shadow "
              onClick={() => this.redirect()}
            >
              <ArrowRightOutlined />
            </Button>
          </div>
          <div className="footerNavigationContainer">

            <div className="footerNavigationBox">
              <p className="footerNavigationLink">Product</p>
            </div>
            <div className="footerNavigationBox">
              <p className="footerNavigationLink">Company</p>
            </div>
            <div className="footerNavigationBox">
              <p className="footerNavigationLink">Learn more</p>
            </div>
            <div className="footerNavigationBox">
              <p className="footerNavigationLink">Get in touch</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
