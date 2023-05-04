import React, { Component } from "react";
import "./contactUs.css";
import contactUs from "../../assets/images/contactUsImages/contactUs.png";
import { Button, Input, Form } from "antd";
import { api_url } from "../../constants/constants";
import ClipLoader from "react-spinners/ClipLoader";
import SweetAlert from "react-bootstrap-sweetalert";
const { TextArea } = Input;

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      requirement: "",
      globalError: null,
      showMessage: false,
      errors: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        requirement: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mobileNumberRegex = /^\d{10}$/;
    switch (name) {
      case "firstName":
        errors.firstName = !value ? "Please enter firstname!" : "";
        break;
      case "lastName":
        errors.lastName = !value ? "Please enter lastname!" : "";
        break;
      case "mobileNumber":
        errors.mobileNumber = !value
          ? "Please enter mobile number"
          : mobileNumberRegex.test(value)
          ? ""
          : "Please enter a valid mobile number!";
        break;
      case "requirement":
        errors.requirement = !value ? "Please enter requirement!" : "";
        break;
      case "email":
        errors.email = !value
          ? "Please enter email"
          : emailRegex.test(String(value).toLowerCase())
          ? ""
          : "Please enter a valid email id!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  validateAllFields = () => {
    const {
      firstName,
      lastName,
      email,
      requirement,
      mobileNumber,
    } = this.state;
    if (!firstName || !lastName || !email || !requirement || !mobileNumber) {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = () => {
    let valid = this.validateAllFields();
    if (valid) {
      this.setState({ globalError: "Please enter all values!" });
    } else {
      const {
        firstName,
        lastName,
        email,
        requirement,
        mobileNumber,
      } = this.state;
      const data = {
        first_name: firstName,
        last_name: lastName,
        mobile: "+91" + mobileNumber,
        email: email,
        requirement: requirement,
      };
      this.setState({ loading: true });
      fetch(api_url + "contact_us/", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            loading: false,
            showMessage: true,
            firstName: "",
            lastName: "",
            mobileNumber: "",
            email: "",
            requirement: "",
          });
          // this.setState({
          //   services: data.results,
          //   // selectedService: this.state.data[0],
          // });
        });
    }
  };

  onConfirm = () => {
    this.setState({ showMessage: false });
  };

  render() {
    const { errors } = this.state;

    return (
      <React.Fragment>
        {this.state.loading ? (
          <ClipLoader
            size={150}
            color={"#225ddf"}
            loading={this.state.loading}
          />
        ) : (
          <div className="contactUsContainer">
            {this.state.showMessage ? (
              <SweetAlert
                success={true}
                error={false}
                title="Thank You!"
                customButtons={
                  <React.Fragment>
                    <Button
                      onClick={this.onConfirm}
                      className="contactSubmitButton"
                      shape="round"
                      size="large"
                    >
                      OK
                    </Button>
                  </React.Fragment>
                }
              >
                Our team will get in touch with you.
              </SweetAlert>
            ) : (
              <></>
            )}
            <div className="contactUsFormContainer">
              <p className="formHeading">Looking out for Domestic Helper ?</p>
              <p className="formSubHeading">
                Settle for a skilled, verified and trained assistance at home
                through EzyHelpers.
              </p>
              <p className="formSubHeading" style={{ marginBottom: "15px" }}>
                Please share your details!
              </p>
              <div className="contactUsForm">
                <Form.Item rules={[{ required: true }]} style={{ margin: 0 }}>
                  <Input
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required
                    placeholder="Enter your first name"
                    className="contactUsInput"
                  />
                  {errors.firstName.length > 0 && (
                    <span className="formError">{errors.firstName}</span>
                  )}
                </Form.Item>
                <Form.Item rules={[{ required: true }]} style={{ margin: 0 }}>
                  <Input
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required
                    placeholder="Enter your last name"
                    className="contactUsInput"
                  />
                  {errors.lastName.length > 0 && (
                    <span className="formError">{errors.lastName}</span>
                  )}
                </Form.Item>
                <Form.Item rules={[{ required: true }]} style={{ margin: 0 }}>
                  <Input
                    name="mobileNumber"
                    value={this.state.mobileNumber}
                    onChange={this.handleChange}
                    required
                    placeholder="Enter your mobile number"
                    className="contactUsInput"
                  />
                  {errors.mobileNumber.length > 0 && (
                    <span className="formError">{errors.mobileNumber}</span>
                  )}
                </Form.Item>
                <Form.Item rules={[{ required: true }]} style={{ margin: 0 }}>
                  <Input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="contactUsInput"
                  />
                  {errors.email.length > 0 && (
                    <span className="formError">{errors.email}</span>
                  )}
                </Form.Item>
                <Form.Item rules={[{ required: true }]} style={{ margin: 0 }}>
                  <TextArea
                    name="requirement"
                    value={this.state.requirement}
                    onChange={this.handleChange}
                    required
                    placeholder="What kind of service you’re looking for?"
                    rows={4}
                    className="contactUsInput"
                  />
                  {errors.requirement.length > 0 && (
                    <span className="formError">{errors.requirement}</span>
                  )}
                  {this.state.globalError &&
                    this.state.globalError.length > 0 && (
                      <span className="formError">
                        {this.state.globalError}
                      </span>
                    )}
                </Form.Item>
                {/* <Input placeholder="Enter you name" className="contactUsInput" /> */}
                {/* <Input
                placeholder="Enter you mobile number"
                className="contactUsInput"
              />
              <Input placeholder="Enter you email" className="contactUsInput" />
              <TextArea
                placeholder="What kind of service you’re looking for?"
                rows={4}
                className="contactUsInput"
              /> */}
                <Button
                  type="primary"
                  className="contactSubmitButton"
                  shape="round"
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="contactUsImageContainer">
              <img
                src={contactUs}
                className="contactUsImage"
                alt="Contact us"
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ContactUs;
