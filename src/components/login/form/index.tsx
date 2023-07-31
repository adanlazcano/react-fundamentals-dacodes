import { Fragment, memo } from "react";
import styles from "./form.module.scss";
import { IInputFields, useLogin } from "@/hooks/useLogin";

const Form = memo(() => {
  const { inputFields, isEnabled, onHandleChange, onHandleSubmit } = useLogin();

  return (
    <form onSubmit={onHandleSubmit} className={styles.login}>
      {inputFields?.map(({ mail, pass }: IInputFields, index: number) => (
        <Fragment key={index}>
          <small>Correo electr&oacute;nico de Dacodes</small>
          <input
            type="text"
            name="mail"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onHandleChange(index, e)
            }
            value={mail}
          />
          <small>Contraseña</small>
          <input
            name="pass"
            type="password"
            value={pass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onHandleChange(index, e)
            }
          />
          <div className={styles.terms}>
            <input
              name="terms"
              type="checkbox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onHandleChange(index, e)
              }
            />{" "}
            <small>He leido y acepto terminos y condiciones</small>
          </div>
        </Fragment>
      ))}

      <button
        className={isEnabled ? styles.disabled : styles.btn}
        disabled={isEnabled}
      >
        Crear cuenta
      </button>
    </form>
  );
});

export default Form;
