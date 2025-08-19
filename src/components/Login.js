import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@gmail.com" && password === "123") {
      localStorage.setItem("user", JSON.stringify({ email }));
      console.log(password);
      navigate("/home"); 
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };

  return (
    
    <Box      
    style={{ 
    display: "flex", 
    flexDirection: "column",
    alignItems: "center", 
    margin: "150px 450px", 
    border:"1px solid black",
    borderRadius:"5px",
    width:"400px",
    height:"400px",
    justifyContent:"center"
    
    }}
      component="form"
      onSubmit={handleLogin}
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div
          style={{ 
        display: "flex", 
        flexDirection: "column"}}
    >
        <h1>Đăng nhập</h1>
        <TextField
          required
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField
          required
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
        <Button type="submit" variant="contained" sx={{ m: 1 }}>
        Submit
      </Button>
      </Box>
  )
}
export default Login;
