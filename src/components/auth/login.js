import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "./formsControl/FormControl";
import { required } from "../../untils/validation";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginAuth } from "../../redux/reducer/authReducer";

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="login"
          name="email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="password"
          name="password"
          type="password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" />
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch()

  const onSubmit = ({ email, password, rememberMe }) => {
    console.log({ email, password, rememberMe });
    loginAuth(email, password, rememberMe);
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
