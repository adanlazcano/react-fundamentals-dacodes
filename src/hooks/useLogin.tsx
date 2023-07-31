/* eslint-disable @typescript-eslint/no-explicit-any */
import { IS_VALID_EMAIL } from "@/assets/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginFunctions = {
  inputFields: Array<any>;
  isEnabled: boolean;
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
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [errors, setErrors] = useState<boolean>(true);

  const navigate = useNavigate();

  const onHandleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const data = [...inputFields];
    data[index][e.target.name] =
      e.target.name === "terms" ? e.target.checked : e.target.value;
    setInputFields(data);

    if (e.target.name === "mail") {
      setErrors(!IS_VALID_EMAIL(e.target.value));
    }

    const emptyFields: number = Object.values(inputFields[0]).filter(
      (value) => value === "" || !value
    ).length;

    setIsEnabled(emptyFields > 0 || errors);
  };

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token: string = import.meta.env.VITE_APP_API_TOKEN ?? "";

    sessionStorage.setItem("token", token);

    navigate("/movies");
  };

  return {
    inputFields,
    isEnabled,
    onHandleChange,
    onHandleSubmit,
  };
};
