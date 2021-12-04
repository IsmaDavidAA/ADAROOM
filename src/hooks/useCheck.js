import { useEffect, useState } from "react";
import { apiSettings } from "../../../config/apiSettings";
export const useCheck = (initialValue = false) => {
  const [isChecked, setIsChecked] = useState(false);

  const check = () => {
    setIsChecked(true);
  };

  const uncheck = () => {
    setIsChecked(false);
  };

  useEffect(() => {
    const fetchCheck = async () => {};

    fetchCheck();
  }, []);
  return [isChecked, check, uncheck];
};
