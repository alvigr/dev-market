import '../styles/button.css';

function Button({ children, secondary, ...props }) {
  let className = 'primary';
  if (secondary) className = 'secondary';
  return (
    <button className={`button button-${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
