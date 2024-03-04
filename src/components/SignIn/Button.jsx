const Button = ({ onClick = null, children = null }) => {
  return (

    <div className="grid grid-cols-3 mx-10">
      <div className="flex flex-row col-span-2">
        <h1 className="text-2xl font-bold">Welcome to Chat</h1>
      </div>
      <div className="flex flex-row-reverse col-span-1">
        <button
          className="text-sm bg-gray-300 font-bold py-2 px-4 rounded-3xl"
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;
