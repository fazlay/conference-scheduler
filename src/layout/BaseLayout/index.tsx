
const BaseLayout: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ children, className = "" }) => {
  return (
    <div className={className}>
    <span>HEADER</span>
      {children}
      <span>FOOTER</span>
    </div>
  );
};

export default BaseLayout;
