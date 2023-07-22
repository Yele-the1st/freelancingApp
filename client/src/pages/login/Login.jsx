import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  EyeIcon,
  ExclamationTriangleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import GoogleIcon from "../../components/svg/GoogleIcon";
import backgroundImage from "../../assets/peeps.svg";
import logo from "../../assets/logos/lancerr_logo.png";
import useInput from "../../hooks/useInput";
import newRequest from "../../utils/newRequest";
import { useState } from "react";

const emailValidation = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value.trim() === "") {
    return { message: "Email is required.", errorStat: "false" };
  } else if (!emailRegex.test(value)) {
    return {
      message: "Please enter a valid email address.",
      errorStat: "false",
    };
  } else {
    return { message: "", errorStat: "true" };
  }
};

const passwordValidation = (value) => {
  if (value.trim() === "") {
    return { message: "Password is required", errorStat: "false" };
  } else {
    return { message: "", errorStat: "true" };
  }
};

const Login = () => {
  const [error, setError] = useState(null);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emialInputHasError,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
    errorMessage: emailError,
    isTouched: emailTouched,
  } = useInput(emailValidation);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    reset: resetPasswordInput,
    errorMessage: passwordError,
  } = useInput(passwordValidation);

  const navigate = useNavigate();

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid && enteredPassword) {
    formIsValid = true;
  }

  const email = enteredEmail;
  const password = enteredPassword;

  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { email, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      console.log(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      console.log(err.response.data);
    }

    // resetEmailInput();
    // resetPasswordInput();
  };

  return (
    <div className="flex flex-col-reverse md:flex-row w-screen min-h-screen ">
      <div className=" absolute left-4 top-4 ">
        <Link to={`/`}>
          <img className=" w-[100px] h-auto" src={logo} alt="" />
        </Link>
      </div>
      <div className=" md:overflow-y-scroll w-screen md:w-[420px] md:h-screen md:order-2 md:flex-shrink-0  h-[calc(100vh-60px)] order-1 flex flex-col pl-0 ">
        <form
          onSubmit={formSubmissionHandler}
          className=" z-10 bg-white  my-[50px] mx-[16px] flex flex-col flex-shrink-0 flex-auto "
          action=""
        >
          <div className=" mt-8 flex flex-col items-center mb-8 ">
            <p className=" font-bold text-3xl text-black ">
              Welcome back, Lancerrs!
            </p>
            <p className=" font-semibold text-sm mt-3 tracking-wide text-black ">
              super excited to see you again.
            </p>
          </div>

          <button className=" relative flex items-center justify-center flex-row border border-transparent transition-all duration-150 ease-linear delay-0 text-black h-12 px-5 rounded-[16px] full min-w-max bg-[#0A0B1E12]  ">
            <div className=" flex mr-1.5 ">
              <GoogleIcon width={`25`} height={`25`} />
            </div>
            <span className=" text-base font-medium  ">Log in with Google</span>
          </button>
          <div className="w-[99.3%] flex my-8 items-center">
            <i className=" flex-1 border-b border-b-black mr-2.5 "></i>
            <span className=" mr-2.5 text-[13px] font-semibold  text-black text-center ">
              or
            </span>
            <i className=" flex-1 border-b border-b-black "></i>
          </div>
          {error && (
            <div className=" w-[99.3%] mt-[30px] mb-5 min-h-[0] flex relative py-2.5 pr-3 pl-5 border-y border-r border-[#FFCDC7] bg-[#FFEAE5] text-sm text-[#970606] rounded-[16px] ">
              <div className=" before:block before:content-[''] before:absolute before:w-[8px] before:top-[-1px] before:bottom-[-1px] before:left-0 before:rounded-l-xl  before:bg-[#DB3030]"></div>
              <ExclamationTriangleIcon className="h-5 w-5 mt-[3px] flex-shrink-0  " />
              <div className=" flex-grow flex ml-3 mr-2.5 break-words ">
                <span>
                  {error}. If you continue to have issues logging into your
                  account, contact our
                  <Link className="text-indigo-500"> support team</Link>
                </span>
              </div>
            </div>
          )}

          <div className=" flex flex-col relative mb-3 w-full   ">
            <div
              className={` flex flex-row items-center border  overflow-hidden h-12 rounded-[16px] px-5  transition-colors delay-0, transition-border duration-200 ease-linear delay-0 ${
                !emialInputHasError
                  ? emailTouched && enteredEmail
                    ? "border-[green] "
                    : "border-[#B5B6BB] focus-within:border-black"
                  : "border-[#FEABAB] bg-[#FFEEEE]"
              }  `}
            >
              <div className=" flex-1 flex flex-row items-center ">
                <input
                  name="email"
                  placeholder="Email"
                  type="text"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  className=" outline-none font-light h-full w-full text-base overflow-hidden whitespace-nowrap text-ellipsis bg-transparent "
                />
                {emialInputHasError && (
                  <ExclamationTriangleIcon className="w-6 h-6 stroke-1  stroke-[red]" />
                )}
                {!emialInputHasError && enteredEmail && (
                  <CheckIcon className="w-6 h-6 stroke-2  stroke-[green]" />
                )}
              </div>
            </div>
            {emialInputHasError && (
              <p className=" text-red-500 mb-3 text-xs">{emailError}</p>
            )}
          </div>

          {enteredEmail && !emialInputHasError && (
            <div className=" flex flex-col relative mb-3 w-full   ">
              <div
                className={` flex flex-row items-center border   overflow-hidden h-12 rounded-[16px] px-5  transition-colors delay-0, transition-border duration-200 ease-linear delay-0 ${
                  !passwordHasError
                    ? "border-[#B5B6BB] focus-within:border-black"
                    : "border-[#FEABAB] bg-[#FFEEEE]"
                } `}
              >
                <div className=" flex-1 flex flex-row items-center ">
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    className=" outline-none font-light h-full w-full text-base overflow-hidden whitespace-nowrap text-ellipsis bg-transparent "
                  />
                  <EyeIcon className="w-6 h-6 stroke-1 " />
                </div>
              </div>
              {passwordHasError && (
                <p className=" text-red-500 mt-1 mb-3 text-xs">
                  {passwordError}
                </p>
              )}
            </div>
          )}
          <footer>
            <button
              disabled={!enteredEmailIsValid || !enteredPasswordIsValid}
              type="submit"
              className={` relative flex items-center justify-center flex-row border border-transparent transition-all duration-150 ease-linear delay-0 text-white h-12 px-5 rounded-[16px] w-full min-w-max  ${
                !enteredEmailIsValid || !enteredPasswordIsValid
                  ? " bg-[#0A0B1E12] cursor-not-allowed"
                  : " bg-[black] "
              }`}
            >
              <span className=" text-base font-medium ">Login</span>
            </button>
            <div className=" flex tracking-wide flex-row items-center justify-center mt-5 ">
              <div className=" text-sm mr-0.5 ">Don't have an account yet?</div>
              <span className="text-sm text-indigo-600">
                <Link to={``}>Sign up</Link>
              </span>
            </div>
          </footer>
        </form>
      </div>
      <div
        className="  w-screen md:w-[calc(100vw-420px)] h-[60px] md:h-full md:block md:absolute md:left-[420px] order-2 flex items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.15",
        }}
      ></div>
    </div>
  );
};

export default Login;
