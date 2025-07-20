"use client";
import React, { useState, useEffect } from "react";
import {
  faEyeSlash,
  faLock,
  faEye,
  faAt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Enter.css";
import Link from "next/link";
import { useProfileStore } from "../store/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNotificationStore } from "../store/notification ";

export default function SignIn() {
  const { setNotification } = useNotificationStore();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const { setProfile, Admaininfo } = useProfileStore();

  const [isAllowed, setIsAllowed] = useState({
    btn: true,
    href: "",
    className: "notAllowed",
  });

  const [userinfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    remember: true,
  });

  useEffect(() => {
    const isCorrect =
      userinfo.name &&
      userinfo.email === Admaininfo.email &&
      userinfo.password === Admaininfo.password;

    setProfile({
      ...userinfo,
      IsSignIn: isCorrect,
    });

    setIsEmailValid(userinfo.email === Admaininfo.email);
    setIsPasswordValid(userinfo.password === Admaininfo.password);

    if (isCorrect) {
      setIsAllowed({
        btn: false,
        href: "/pages/home",
        className: "Allowed",
      });
    } else {
      setIsAllowed({
        btn: true,
        href: "",
        className: "notAllowed",
      });
    }
  }, [userinfo, Admaininfo, setProfile]);

  return (
    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className="sign">
        <h1>Sign In</h1>

        <div className="input">
          <div className="input">
            <label htmlFor="name">UserName</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                id="name"
                onChange={(e) =>
                  setUserInfo({ ...userinfo, name: e.target.value })
                }
                value={userinfo.name}
                placeholder="Name"
              />
            </div>
          </div>
        </div>

        <div className="input">
          <label htmlFor="Email">Email</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faAt} className="icon" />
            <input
              type="email"
              id="Email"
              value={userinfo.email}
              placeholder="Email"
              onChange={(e) =>
                setUserInfo({ ...userinfo, email: e.target.value })
              }
            />
          </div>
          {!isEmailValid && userinfo.email.length > 0 && (
            <p className="wrong">Wrong Email</p>
          )}
        </div>

        <div className="input" >
          <div className="input">
            <label htmlFor="confirmPassword">Password</label>
            <div className="input-container password-container">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Password"
                value={userinfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userinfo, password: e.target.value })
                }
              />
              <FontAwesomeIcon
                id="eye"
                icon={showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />
            </div>
            {!isPasswordValid && userinfo.password.length > 0 && (
              <p className="wrong">Wrong Password</p>
            )}
          </div>
        </div>

        <div className="remember">
          <input
            type="checkbox"
            className="check"
            checked={userinfo.remember}
            onChange={(e) =>
              setUserInfo({ ...userinfo, remember: e.target.checked })
            }
          />
          <p>Remember Me</p>
        </div>

        <Link
          onClick={() => {
            setNotification({
              message: `Sign In Successfully in ${new Date().toLocaleString()} `,
            });
          }}
          className={isAllowed.className}
          href={isAllowed.href}
        >
          <button
            style={{ cursor: isAllowed.btn ? "not-allowed" : "pointer" }}
            disabled={isAllowed.btn}
            className="btn"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}