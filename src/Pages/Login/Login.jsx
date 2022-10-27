import { Link, useLocation, useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { login, providerLogin, setLoading } = useContext(AuthContext);

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // set location from state property
  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // email and password submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      login({ email, password })
        .then(({ user }) => {
          form.reset();
          if (user.emailVerified) {
            // Success
            toast.success('Login Success');
            setTimeout(() => navigate(from, { replace: true }), 2000);
          } else {
            // email Not verified
            toast.error('Your email is not verified. Please verify your email first.');
          }
        })
        .catch(err => {
          console.log(err);
          setError(err.message);
        });
    } else {
      setError("Email or password can't be blank")
    }
  }

  // handle provider (google and github) login
  const handleLogin = (provider) => {
    providerLogin(provider)
      .then((result) => {
        // const {user} = result;
        toast.success('Login Success');
        setTimeout(() => navigate(from, { replace: true }), 2000);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }

  return (
    <div className="container mx-auto pb-5">
      <h3 className="text-center text-3xl font-bold mb-5">Login</h3>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
            <p className="text-error">{error}</p>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="form-control mt-2">
            <button onClick={() => handleLogin(googleProvider)} className="btn btn-outline btn-success">Login with Google</button>
          </div>
          <div className="form-control mt-2">
            <button onClick={() => handleLogin(githubProvider)} className="btn btn-outline btn-info">Login with Github</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>Don't have an account? <Link className="link" to='/signup'>Signup Here</Link></p>
      </div>
    </div>
  );
}

export default Login;
