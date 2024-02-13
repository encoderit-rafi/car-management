const Page = ({ children, title = "", action }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <h2 className="px-4 text-2xl font-bold">{title}</h2>
        <div className="">{action}</div>
      </div>
      {children}
    </div>
  );
};

export default Page;
