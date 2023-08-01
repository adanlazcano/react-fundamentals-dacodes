/* eslint-disable @typescript-eslint/no-explicit-any */
import { IS_VALID_EMAIL } from "@/assets/constants/regexExp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginFunctions = {
  inputFields: Array<IInputFields>;
  isEmpty: boolean;
  isError: boolean;
  onHandleChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
export interface IInputFields {
  mail: string;
  pass: string;
  terms: boolean;
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
  const [isError, setIsError] = useState<boolean>(true);

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

      if (e.target.name === "mail") {
        setIsError(!IS_VALID_EMAIL(e.target.value));
      }

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

      const token: string = import.meta.env.VITE_APP_API_TOKEN ?? "";

      sessionStorage.setItem("token", token);

      navigate("/movies");
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
