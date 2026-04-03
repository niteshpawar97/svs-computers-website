function Badge({ children, variant = 'primary', size = 'md' }) {
  const variants = {
    primary: 'bg-primary-50 text-primary-800',
    accent: 'bg-accent-50 text-accent-800',
    success: 'bg-green-50 text-green-800',
    warning: 'bg-yellow-50 text-yellow-800',
    neutral: 'bg-gray-100 text-gray-700',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}

export default Badge;
