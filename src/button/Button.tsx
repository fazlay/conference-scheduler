type IButtonProps = {
  children: string;
  id: string;
  setActiveTab: any;
};

const StyledButton = (props: IButtonProps) => {
  const { children, id, setActiveTab } = props;
  return (
    <div
      onClick={() => {
        console.log("Button Click", id);
        setActiveTab(id);
      }}
      className=" cursor-pointer text-white mb-2 py-2 w-full font-bold border-2 hover:border-transparent bg-white hover:bg-yellow-primary rounded-xl mx-8"
    >
      <div className=" text-yellow text-4xl ml-2 py-2 px-4 inline-block bg-white rounded-lg">
        &#8645;
      </div>{" "}
      {children}
    </div>
  );
};

export { StyledButton };
