import { Link } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {login, providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    handleEmailLogin({email, password});
  }

  const handleEmailLogin = (data) => {
    login(data)
    .then(({user}) => {
      console.log(user);
    })
    .catch(err => console.log(err));
  }

  const handleLogin = (provider) => {
    providerLogin(provider)
    .then((result) => {
      const {user} = result;
      console.log(user);
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="container mx-auto pb-5">
      <h3 className="text-center text-3xl font-bold mb-5">Login</h3>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" />
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-control mt-2">
            <button onClick={() => handleLogin(googleProvider)} className="btn btn-outline btn-success">Login with Google</button>
          </div>
          <div className="form-control mt-2">
            <button onClick={() => handleLogin(githubProvider)} className="btn btn-outline btn-info">Login with Github</button>
          </div>
        </form>
      </div>
      <div className="text-center mt-3">
        <p>Don't have an account? <Link className="link" to='/signup'>Signup Here</Link></p>
      </div>
    </div>
  );
}

export default Login;
