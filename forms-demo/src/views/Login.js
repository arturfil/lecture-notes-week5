import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  return (
    <>
      <h2>Login View</h2>
      <button onClick={() => history.push('/')}>Login</button>
    </>
  )
}

export default Login;