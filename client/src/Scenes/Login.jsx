import React, {useContext, useState} from "react";
import styled from 'styled-components';

import serverAPI from "api/instance";

import {useDispatch} from "react-redux";
import {userLoggedIn} from "store/actions/user";

const StyledLoginHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .loginCard{
    width: 400px;
    height: 300px;
    background-color: ${props => props.theme.infoCardBackgroundColor};
    margin: 20px;
    border-radius: 5px;

    .cardHeader {
      width: 100%;
      height: 50px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: ${props => props.theme.accentBackgroundColor};
      font-size: 25px;
      line-height: 30px;
      color: ${props => props.theme.accentTextColor};
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .cardBody {
      padding: 10px 20px;
      box-sizing: border-box;
      color: ${props => props.theme.appBaseFontColor};
    }

    .cardFooter {
      padding: 10px 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("olivier@mail.com");
  const [password, setPassword] = useState("bestPassw0rd");
  const dispatch = useDispatch();
  const [error, setError] = useState("")

  const toggleCardMode = () => {
    setIsLogin(!isLogin);
  }

  const getLoginCard = () => {
    return (
      <StyledLoginHolder>
        {error && <div>{error}</div>}
        <div className={"loginCard"}>
          <div className={'cardHeader'}>
            Login
          </div>
          <div className={'cardBody'}>
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder={"Email"}/>
            <input onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder={"Password"}/>
          </div>
          <div className={'cardFooter'}>
            <button onClick={() => {
              serverAPI.post("/login", {
                "email": email,
                "password": password
              }).then((response) => {
                dispatch(userLoggedIn({
                  userName:"email",
                  userRoles:["regularUser"],
                  isLoggedIn: response.data.accessToken
                }))
              })
              .catch((error) => {
                setError(error.response.statusText);
                console.log("api call catch", error.response.statusText);
              })
            }}>
              Login
            </button>
            <button onClick={toggleCardMode}>
              Register
            </button>
          </div>
        </div>
      </StyledLoginHolder>
    )
  }

  const getRegisterCard = () => {
    return(
        <StyledLoginHolder>
          <div className={"loginCard"}>
            <div className={'cardHeader'}>
              Register
            </div>
            <div className={'cardBody'}>
              <input onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder={"Email"}/>
              <input onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder={"Password"}/>
            </div>
            <div className={'cardFooter'}>
              <button onClick={() => {
                serverAPI.post("/register", {
                  "email": email,
                  "password": password
                }).then((response) => {
                  console.log("api call then", response);
                  dispatch(userLoggedIn({
                    userName:"email",
                    userRoles:["regularUser"],
                    isLoggedIn: response.data.accessToken
                  }))
                })
                .catch((error) => {
                  setError(error.response.statusText);
                  console.log("api call catch", error);
                })
              }}>
                Register
              </button>
              <button onClick={toggleCardMode}>
                Login
              </button>
            </div>
          </div>
        </StyledLoginHolder>
      )
  }

  if (isLogin) {
    return getLoginCard()
  } else {
    return getRegisterCard()
  }
}

export default Login