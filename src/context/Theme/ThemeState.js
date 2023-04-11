import { ThemeContext } from "./ThemeContext";
const ThemeState = (props) => {
  let bgColor = "#F5F5F5";
  let primaryColor = "#FF8628";
  let btnColor = "#3E465E";
  let secondaryColor = "#CBD1E4";
  let pastdueColor = "#C00000";
  //  const jetBlack = "#2E2F2F";

  let textColor = "#3F5E60";

  const greyDefault = "#EAEDF1";

  return (
    <ThemeContext.Provider
      value={{
        bgColor,
        primaryColor,
        secondaryColor,
        btnColor,
        pastdueColor,
        textColor,
        greyDefault,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
