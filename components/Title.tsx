const Title = ({ children }) => {
  return (
    <div className="relative">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">{children}</h1>
      </div>
    </div>
  );
};

export default Title;