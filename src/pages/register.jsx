import * as React from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// Functional component representing a Register section
const Register = () => {
  // Import the `useNavigate` hook from React Router DOM
  const navigate = useNavigate();

  // Define state variables and their initial values using the `useState` hook
  const [fullname, setFullname] = useState("");
  const [fullnameValid, setFullNameValid] = useState(true);
  const fullnameRef = useRef(null);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(0);
  const emailRef = useRef(null);

  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(0);
  const passwordRef = useRef(null);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(0);
  const confirmPasswordRef = useRef(null);

  const [country, setCountry] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(true);
  const phoneRef = useRef(null);

  const [company, setCompany] = useState("");
  const [terms, setTerms] = useState(false);
  const termsRef = useRef(null);

  const [isInitial, setInitial] = useState(true);

  // Define regular expressions for email, password, and phone formats
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordFormat =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const phoneFormat =
    /^(?:(?:\+|0{0,2})353|\(?\+353\)?0?)(?:\s?[1-9](?:[-\s]?\d){7}|(?:(?:[-\s]?\d){1}){10})$/;

  // Function to handle changes in the full name input field
  const onFullNameChange = (e) => {
    setFullname(e.target.value);

    // Check if the value of the full name input field is empty
    if (e.target.value == "") {
      setFullNameValid(false);
    } else {
      setFullNameValid(true);
    }
  };

  // Function to handle changes in the email input field
  const onEmailChange = (e) => {
    setEmail(e.target.value);

    // Check if the value of the email input field is empty or does not match the email format
    if (e.target.value == "" || !emailFormat.test(e.target.value)) {
      if (e.target.value == "") {
        setEmailValid(1); // Mark email as invalid (empty)
      } else {
        setEmailValid(2); // Mark email as invalid (format mismatch)
      }
    } else {
      setEmailValid(0); // Mark email as valid
    }
  };

  // Function to handle changes in the password input field
  const onPasswordChange = (e) => {
    setPassword(e.target.value);

    // Check if the value of the password input field is empty or does not match the password format
    if (e.target.value == "" || !passwordFormat.test(e.target.value)) {
      if (e.target.value == "") {
        setPasswordValid(1); // Mark password as invalid (empty)
      } else {
        setPasswordValid(2); // Mark password as invalid (format mismatch)
      }
    } else {
      setPasswordValid(0); // Mark password as valid
    }
  };

  // Function to handle changes in the confirm password input field
  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    // Check if the value of the confirm password input field is empty, does not match the password format, or does not match the password
    if (
      e.target.value == "" ||
      !passwordFormat.test(e.target.value) ||
      password != e.target.value
    ) {
      if (e.target.value == "") {
        setConfirmPasswordValid(1); // Mark confirm password as invalid (empty)
      } else {
        if (!passwordFormat.test(e.target.value)) {
          setConfirmPasswordValid(2); // Mark confirm password as invalid (format mismatch)
        } else {
          setConfirmPasswordValid(3); // Mark confirm password as invalid (mismatch with password)
        }
      }
    } else {
      setConfirmPasswordValid(0); // Mark confirm password as valid
    }
  };

  // Function to handle changes in the country select input field
  const onCountryChange = (e) => {
    setCountry(e.target.value); // Update the country state variable with the selected value
  };

  // Function to handle changes in the phone number input field
  const onPhoneChange = (e) => {
    setPhone(e.target.value); // Update the phone state variable with the new value

    // Check if the value of the phone number input field does not match the phone number format defined earlier using the regular expression `phoneFormat`
    if (!phoneFormat.test(e.target.value)) {
      setPhoneValid(false); // Mark phone number as invalid
    } else {
      setPhoneValid(true); // Mark phone number as valid
    }
  };

  // Function to handle changes in the company input field
  const onCompanyChange = (e) => {
    setCompany(e.target.value); // Update the company state variable with the new value
  };

  // Function to handle changes in the terms checkbox
  const onTermsChange = (e) => {
    setTerms(e.target.checked); // Update the terms state variable with the checked status of the checkbox
    setInitial(false); // Set the initial state variable to false, indicating that the user has interacted with the input
  };

  // Function to handle the registration process
  const register = () => {
    if (!fullname) {
      fullnameRef.current.focus();
      setFullNameValid(false);
      return;
    }
    if (!email) {
      emailRef.current.focus();
      setEmailValid(1);
      return;
    }
    if (!emailFormat.test(email)) {
      emailRef.current.focus();
      setEmailValid(2);
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      setPasswordValid(1);
      return;
    }
    if (!passwordFormat.test(password)) {
      passwordRef.current.focus();
      setPasswordValid(2);
      return;
    }
    if (!confirmPassword) {
      confirmPasswordRef.current.focus();
      setConfirmPasswordValid(1);
      return;
    }
    if (!passwordFormat.test(confirmPassword)) {
      confirmPasswordRef.current.focus();
      setConfirmPasswordValid(2);
      return;
    }
    if (password != confirmPassword) {
      confirmPasswordRef.current.focus();
      setConfirmPasswordValid(3);
      return;
    }
    if (phone != "" && !phoneFormat.test(phone)) {
      phoneRef.current.focus();
      setPhoneValid(2);
      return;
    }
    if (terms == false) {
      termsRef.current.focus();
      setInitial(false);
      return;
    }
    navigate("/survey");
  };

  return (
    <div className="mt-10">
      <img className="w-24 sm:w-36 mx-auto" src="/images/logo.png" />
      <div className=" bg-primaryColor w-full p-8 mt-2 mb-6">
        <p className="text-white text-center text-xl">
          {
            "Register NOW for free. \n\n Get FREE membership for life \n\n Free entry to a closed draw for ..."
          }
        </p>
      </div>
      <div className="ml-4 mr-4">
        <div className="mb-8 worxinn-introduction">
          <p className=" font-bold text-lg">What is WorXinn?</p>
          <p className=" font-semibold text-lg ml-2 mt-2">
            WorXInn plans to roll out bookable Workspaces in 200 Hotels, Golf
            Clubs and Motorway Service Stations all over Ireland.
          </p>
        </div>
        <div className="mb-8 worxinn-why">
          <p className=" font-bold text-lg">Why Register now?</p>
          <p className="font-semibold text-lg ml-2 mt-2">
            Register now for free and never pay for membership again! That’s
            €144 saving per year
          </p>
        </div>
        <div className="register-section px-1">
          <p className="font-bold text-xl">Register Now:</p>
          <div className="register-form mt-4">
            <div className="fullname mb-2">
              <div className="fullname-label text-sm mb-2 text-labelCOlor">
                Full Name *
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img className="w-5 h-5" src="images/user.png" />
                </div>
                <input
                  type="text"
                  ref={fullnameRef}
                  value={fullname}
                  onChange={onFullNameChange}
                  className="w-full block px-4 py-3 ps-10 pe-10 text-sm text-gray-900 border rounded-md focus-visible:outline-borderColor bg-gray-50 "
                  placeholder="Text"
                />
              </div>
              {!fullnameValid ? (
                <p className="mt-1 text-sm font-bold text-red-600">
                  Full Name field is mandatory. *
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="email mb-2">
              <div className="email-label text-sm mb-2 text-labelCOlor">
                Email *
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img className="w-5 h-5" src="images/email.png" />
                </div>
                <input
                  type="email"
                  ref={emailRef}
                  value={email}
                  onChange={onEmailChange}
                  className="w-full block px-4 py-3 ps-10 pe-10 text-sm text-gray-900 border rounded-md focus-visible:outline-borderColor bg-gray-50 "
                  placeholder="Text"
                />
              </div>
              {emailValid != 0 ? (
                <p className="mt-1 text-sm font-bold text-red-600">
                  {emailValid == 1
                    ? "Email field is mandatory. *"
                    : "Invalid Email Format. *"}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="password mb-2">
              <div className="password-label text-sm mb-2 text-labelCOlor">
                Password *
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img className="w-5 h-5" src="images/password.png" />
                </div>
                <input
                  type="password"
                  ref={passwordRef}
                  value={password}
                  onChange={onPasswordChange}
                  className="w-full block px-4 py-3 ps-10 pe-10 text-sm text-gray-900 border rounded-md focus-visible:outline-borderColor bg-gray-50 "
                  placeholder="Text"
                />
              </div>
              {passwordValid != 0 ? (
                <p className="mt-1 text-sm font-bold text-red-600">
                  {passwordValid == 1
                    ? "Password field is mandatory. *"
                    : "Password must contain at least 6 characters one number, one symbol and one upper case and one lower case letter *"}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="password mb-2">
              <div className="password-label text-sm mb-2 text-labelCOlor">
                Confirm Password *
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img className="w-5 h-5" src="images/password.png" />
                </div>
                <input
                  type="password"
                  ref={confirmPasswordRef}
                  value={confirmPassword}
                  onChange={onConfirmPasswordChange}
                  className="w-full block px-4 py-3 ps-10 pe-10 text-sm text-gray-900 border rounded-md focus-visible:outline-borderColor bg-gray-50 "
                  placeholder="Text"
                />
              </div>
              {confirmPasswordValid != 0 ? (
                <p className="mt-1 text-sm font-bold text-red-600">
                  {confirmPasswordValid == 1
                    ? "Confirm password field is mandatory. *"
                    : confirmPasswordValid == 2
                    ? "Confirm password must contain at least 6 characters one number, one symbol and one upper case and one lower case letter *"
                    : "Passwords do not match *"}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="country mb-2">
              <div className="country-label text-sm mb-2 text-labelCOlor">
                Country
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img className="w-5 h-5" src="images/country.png" />
                </div>
                <input
                  type="text"
                  value={country}
                  onChange={onCountryChange}
                  className="w-full block px-4 py-3 ps-10 pe-10 text-sm text-gray-900 border rounded-md focus-visible:outline-borderColor bg-gray-50 "
                  placeholder="Text"
                />
              </div>
            </div>
            <div className="phone mb-2">
              <div className="phone-label text-sm mb-2 text-labelCOlor">
                Phone
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img className="w-5 h-5" src="images/phone.png" />
                </div>
                <input
                  type="number"
                  ref={phoneRef}
                  value={phone}
                  onChange={onPhoneChange}
                  className="w-full block px-4 py-3 ps-10 pe-10 text-sm text-gray-900 border rounded-md focus-visible:outline-borderColor bg-gray-50 "
                  placeholder="Text"
                />
              </div>
              {phoneValid != true ? (
                <p className="mt-1 text-sm font-bold text-red-600">
                  Phone number must be Irish phone number
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="company mb-8">
              <div className="company-label text-sm mb-2 text-labelCOlor">
                Company
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img className="w-5 h-5" src="images/company.png" />
                </div>
                <input
                  type="text"
                  value={company}
                  onChange={onCompanyChange}
                  className="w-full block px-4 py-3 ps-10 pe-10 text-sm text-gray-900 border rounded-md focus-visible:outline-borderColor bg-gray-50 "
                  placeholder="Text"
                />
              </div>
            </div>
            <div className="terms-conditions mb-8">
              <div className="flex">
                <input
                  type="checkbox"
                  ref={termsRef}
                  checked={terms}
                  onChange={onTermsChange}
                  className="w-6 h-6 bg-checkboxColor checked:bg-red-500"
                  style={{ background: "black" }}
                />
                <span className="ml-2">
                  <span className="font-semibold text-sm">Accept </span>
                  <Link to="terms">
                    <span className="font-semibold text-sm text-linkColor underline hover:cursor-pointer">
                      terms and conditions
                    </span>
                  </Link>
                </span>
              </div>
              {isInitial != true && terms != true ? (
                <p className="mt-1 text-sm font-bold text-red-600">
                  You must accept with terms & conditions
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="register-submit mb-16 float-right">
            <button
              className="bg-primaryColor focus:ring-2 focus:ring-primaryColor hover:bg-red-600 text-white border rounded-lg px-4 py-2 text-xl"
              onClick={register}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
