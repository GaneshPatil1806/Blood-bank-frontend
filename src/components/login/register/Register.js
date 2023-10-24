import React, { useState } from "react";
import "./Register.css";
import { useNavigate, NavLink } from "react-router-dom";

const Register = ({isLoggedIn,setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [user, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number:"",
    country: "",
    blood: "",
    gender: "",
    medical_issue: "None",
    dob: "",
    password: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    //const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // if (!values.first_name) {
    //   errors.last_name = "First name is required";
    // } else if (values.first_name.length < 2) {
    //   errors.last_name = "First name must be at least 2 characters";
    // }

    // if (!values.last_name) {
    //   errors.last_name = "Last name is required";
    // } else if (values.last_name.length < 5) {
    //   errors.last_name = "Last name must be at least 5 characters";
    // }

    // if (!values.first_name) {
    //   errors.name = "Name is required";
    // } else if (values.first_name.length < 3) {
    //   errors.name = "Name must be at least 3 characters";
    // }

    // if (!values.email) {
    //   errors.email = "Email is required";
    // } else if (!regex.test(values.email)) {
    //   errors.email = "Invalid email format";
    // }

    // if (!values.mobile) {
    //   errors.mobile = "Mobile number is required";
    // } else if (values.mobile.length !== 10) {
    //   errors.mobile = "Mobile number must be 10 digits";
    // }

    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be at least 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed 10 characters";
    // }
    
    return errors;
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        console.log(JSON.stringify(user))
        console.log(response);
        if (response.ok) {
          const data=await response.json();
          localStorage.setItem('token', JSON.stringify(data.token));
          setIsLoggedIn(true);
          navigate("/");
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }
      } catch (error) {
        
        setFormErrors({ backendError: error.message });
      }
    }
  };

  return (
    <div>
      <div className="register-box">
        <div className="register_form">
          <form>
            <h1>Create your account</h1>
            <div className="errors error">
              <p className="errors fname">{formErrors.first_name}</p>
              <label>
                FIRST NAME&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First name"
                onChange={changeHandler}
                value={user.first_name}
              />
              <p className="errors lname">{formErrors.last_name}</p>
              <label>
                LAST NAME&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last name"
                onChange={changeHandler}
                value={user.last_name}
              />
              <p className="errors email">{formErrors.email}</p>
              <label>
              E-MAIL&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeHandler}
                value={user.email}
              />
              <p className="errors mobile">{formErrors.email}</p>
              <label>
              MOBILE&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="text"
                name="mobile_number"
                id="mobile_number"
                placeholder="Mobile Number"
                onChange={changeHandler}
                value={user.mobile_number}
              />
              <p className="errors contry">{formErrors.country}</p>
              <label>
              CONTRY&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                onChange={changeHandler}
                value={user.country}
              />
              <p className="errors pass">{formErrors.blood}</p>
              <label>
              BLOOD GROUP&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="text"
                name="blood"
                id="blood"
                placeholder="blood"
                onChange={changeHandler}
                value={user.blood}
              />
              <p className="errors gender">{formErrors.gender}</p>
              <label>
              GENDER&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="text"
                name="gender"
                id="gender"
                placeholder="gender"
                onChange={changeHandler}
                value={user.gender}
              />
              <label>
              DOB&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                placeholder="DOB"
                onChange={changeHandler}
                value={user.dob}
              />
              <p className="errors pass">{formErrors.password}</p>
              <label>
              PASSWORD&nbsp;<i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={changeHandler}
                value={user.password}
              />
              <button type="submit" onClick={signupHandler}>
                Register &nbsp;<i className="fa-sharp fa-solid fa-address-card"></i>
              </button>
            </div>
          </form>
          <NavLink to="/login" className="link_next">
            Already registered? Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;