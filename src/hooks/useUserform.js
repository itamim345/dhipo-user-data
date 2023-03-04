import { useState } from "react";

export default function useUserForm(initialState = {}) {
  const [inputValues, setInputValues] = useState(initialState);

  const handleChangeInput = ({target}) => {
    setInputValues({...inputValues,[target.name] : target.value})
  }


  return { inputValues, handleChangeInput};
}
