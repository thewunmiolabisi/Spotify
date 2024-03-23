import { combinedClasses } from "../../../utils/format";

export const CustomButton = (props) => {
  const classNames = {
    primary: 'btn',
    outline: 'btn-2',
    secondary: 'btn-secondary',
  };
  const className = classNames[props.type] || classNames.primary;
  const Classes =combinedClasses(className, props.className)

  return (
    props.onClick ? (
      <button onClick={props.onClick} className={combinedClasses(className, props.className)}>
        {props.children}
      </button>
    ) : (
      <a href="#/button"  
      className={Classes}>
        {props.children}
      </a>
    )
  );
  
};
