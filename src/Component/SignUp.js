import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  Checkbox,
  Typography,
} from "@material-ui/core";

import { AccountCircle, LockRounded } from "@material-ui/icons";

function SignUp() {
  const [username1, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useNavigate();

  const SignUpUser = () => {
    const user = {
      username: username1,
      firstname:firstName,
      lastname:lastName,
      password: password1,
      orders: [],
    };
    if ((username1.length > 0) & (password1.length > 0)) {
      axios
        .post(`https://morning-reaches-59384.herokuapp.com/users`, user)
        .then((res) => {
          console.log("user created successfully");
          history("/");
        })
        .catch((err) => {
          setMessage(err);
          console.log(err);
        });
    } else {
      if (username1.length === 0) {
        console.log("username should not be empty");
        setMessage("Username should not be empty");
      }
      if (password1.length === 0) {
        console.log("password should not be empty");
        setMessage("Password should not be empty");
      }
    }
  };

  return (
    <div>
      <Grid
        container
        style={{
          border: "solid",
          minwidth: "100%",
          height: "100vh",
        }}
      >
        <Grid item xs={12} md={7} lg={7}>
          <img
            src="/pics/1.jpg"
            style={{ width: "100%", height: "100%", objectfits: "cover" }}
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
            padding: 10,

            backgroundImage: `url('https://images.unsplash.com/photo-1585314062604-1a357de8b000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80')`,
          }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minwidth: 300,
              color: "white",
              
            }}
          >
            <Grid container justifyContent="center">
              <img
                src="/pics/user2.png"
                width={200}
                alt="logo"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <TextField
              type="text"
              label="Username"
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{
                style:{color:'white'}
              }}
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
              type="text"
              label="First Name"
              margin="normal"
              onChange={(e) => setFirstName(e.target.value)}
              InputLabelProps={{
                style:{color:'white'}
              }}
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
              type="text"
              label="Last name"
              margin="normal"
              onChange={(e) => setLastName(e.target.value)}
              InputLabelProps={{
                style:{color:'white'}
              }}
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
              InputLabelProps={{
                style:{color:'white'}
              }}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                style:{color:'white'},
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            
            
            <Typography> {message} </Typography> <div style={{ height: 20 }} />
            <Button
              type="submit"
              onClick={SignUpUser}
              color="default"
              variant="contained"
            >
              SignUp
            </Button>
            <div style={{ height: 20 }} />
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Typography>Already have an account ?</Typography>
              </Grid>
              <Grid item>
                <Link to="/signin" style={{ textDecoration: "none", color: "yellow" }}>
                  Sign in
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

export default SignUp;
