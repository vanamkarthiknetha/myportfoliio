const Container = ({ children, className = "", id }) => {
  return (
    <div
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
