import { Link } from 'react-router-dom';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...props
}) {
  const variants = {
    primary: 'bg-primary-900 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
    accent: 'bg-accent text-white hover:bg-accent-700 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary-900',
    ghost: 'text-primary-900 hover:bg-gray-100',
    white: 'bg-white text-primary-900 hover:bg-gray-100 shadow-md',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-95 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  );

  if (to) {
    return <Link to={to} className={cls} {...props}>{content}</Link>;
  }

  if (href) {
    return <a href={href} className={cls} {...props}>{content}</a>;
  }

  return <button className={cls} {...props}>{content}</button>;
}

export default Button;
