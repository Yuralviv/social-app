import React from "react";
import { Field } from "redux-form";
import { required } from "../../untils/validation";
import { Input } from "./formsControl/FormControl";

const LoginForm = ( { handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
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
        <Field type="checkbox" name={"rememberMe"} component={"input"} />
        remenber me
      </div>
      <div>
        <button type="submit">log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
