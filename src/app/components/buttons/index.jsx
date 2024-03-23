export const CustomButton = (props) => {
  const classNames = {
    primary: 'btn',
    outline: 'btn-2',
    secondary: 'btn-secondary',
  }
  const className = classNames[props.type] || classNames.primary 
  return (
    props.onClick ? <button className={className}>{props.children}</button>
    :
    <button className={className}>See other plans</button>
  )
};