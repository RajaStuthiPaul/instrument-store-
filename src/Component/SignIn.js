import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import store from "./store";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";

function SignIn() {
  const [username1, setUsername] = useState("");
  const [password1, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useNavigate();
 
  const LoginUser = () => {
    const user = {username:username1, password:password1}
    axios
      .post(
        `http://localhost:5000/login`, user
      )
      .then((res) => {
        if (res.data) {
          store.dispatch({ type: "loginSuccess", payload: res.data.user });
          console.log("Login Success");
          history("/home");
        } else {
          store.dispatch({ type: "loginFail" });
          console.log("Inval_id Username or Password");
          setMessage("Username or Password is Inval_id");
        }
      })
      .catch((err) => {
        store.dispatch({ type: "loginFail" });
        setMessage(err);
        console.log(err);
      });
  };
  
  return (
    <div>
      <Grid
        container
        minw_idth="100vh"
        style={{ border: "sol_id", minw_idth: "100%", height: "100vh" }}
      >
        <Grid item xs={12} md={7} lg={7}>
          <img
            src="/pics/lib2.jpg"
            style={{ w_idth: "100%", height: "100%", objectfits: "cover" }}
            alt="brand"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={5}
          lg={5}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{
            color: "white",
            padding: 10,
            backgroundImage: `url('https://images.unsplash.com/photo-1585314062604-1a357de8b000?ixlib=rb-1.2.1&ix_id=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80')`,
          }}
        >
          <div />
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxW_idth: 400,
              minw_idth: 300,
            }}
          >
            <Grid container justifyContent="center">
              <img
                src="/pics/user.png"
                w_idth={200}
                alt="logo"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <TextField
              type="text"
              label="Username"
              InputLabelProps={{
                style:{color:'white'}
              }}
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
              required
              InputProps={{               
                style:{color:'white'},
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              type="password"
              label="Password"
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{
                style:{color:'white'}
              }}
              InputProps={{
                style:{color:'white'},
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Typography htmlFor="rememberMe">
                  Remember me
                  <Checkbox
                   
                    type="checkbox"
                    defaultChecked
                    color="primary"
                    value="lsRememberMe"
                  ></Checkbox>
                </Typography>
              </Grid>
              <Grid item> </Grid>
            </Grid>
            <Typography> {message} </Typography> <div style={{ height: 20 }} />
            <Button
              type="submit"
              onClick={LoginUser}
              color="default"
              variant="contained"
            >
              Sign In
            </Button>
            <div style={{ height: 20 }} />
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Typography> Don 't have an account?</Typography>
              </Grid>
              <Grid item>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "yellow" }}
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </div>

          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIn;
