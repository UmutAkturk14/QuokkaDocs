type ButtonProps = (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
) & {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className = "",
  ...rest
}) => {
  if (href) {
    // render an anchor if href exists
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={`px-4 py-2 ${className}`} {...anchorProps}>
        {children}
      </a>
    );
  }
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={`px-4 py-2 ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
