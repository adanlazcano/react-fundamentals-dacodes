/* eslint-disable @typescript-eslint/no-explicit-any */
import { IS_VALID_EMAIL } from "@/assets/constants/regexExp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as services from "@/services/auth";

type LoginFunctions = {
  inputFields: Array<IInputFields>;
  isEmpty: boolean;
  isError: IInputFields;
  onHandleChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
export interface IInputFields {
  mail: string | null;
  pass: string | null;
  terms?: boolean;
}

export const useLogin = (): LoginFunctions => {
  const [inputFields, setInputFields] = useState<any>([
    {
      mail: "",
      pass: "",
      terms: false,
    },
  ]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [isError, setIsError] = useState<IInputFields>({
    mail: "",
    pass: "",
  });

  const navigate = useNavigate();

  const onHandleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const data = [...inputFields];
      data[index][e.target.name] =
        e.target.name === "terms" ? e.target.checked : e.target.value;
      setInputFields(data);

      e.target.name === "mail" &&
        setIsError({
          ...isError,
          [e.target.name]: !IS_VALID_EMAIL(e.target.value)
            ? "Escribe un email valido."
            : null,
        });

      e.target.name === "pass" &&
        setIsError({
          ...isError,
          [e.target.name]:
            e.target.value.length < 7
              ? "La contraseña debe tener al menos 7 caracteres."
              : null,
        });

      const emptyFields: number = Object.values(inputFields[0]).filter(
        (value) => value === "" || !value
      ).length;

      setIsEmpty(emptyFields > 0);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const { data }: any = await services.getToken();

      sessionStorage.setItem("guest_session_id", data?.guest_session_id ?? "");

      data?.guest_session_id && navigate("/movies");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    inputFields,
    isEmpty,
    isError,
    onHandleChange,
    onHandleSubmit,
  };
};
