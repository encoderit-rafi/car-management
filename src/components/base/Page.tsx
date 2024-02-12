const Page = ({ children, title }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default Page;
