import { memo } from "react";
import styles from "./login.module.scss";
import Form from "./form";

const LoginComponent = memo(() => {
  return (
    <div className={styles.container}>
      <h3>Login</h3>
      <small>¡Bienvenido!</small>
      <Form />
    </div>
  );
});

LoginComponent.displayName = "LoginComponent";

export default LoginComponent;
