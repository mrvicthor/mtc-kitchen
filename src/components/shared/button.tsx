type ButtonProps = {
  content: string;
};
const Button = ({ content }: ButtonProps) => {
  return (
    <button className="h-15 w-[14.25rem] bg-[#d4b254] banner-btn text-white transition rounded-[1.875rem] cursor-pointer hover:bg-transparent hover:border hover:border-[#d4b254] hover:text-[#d4b254] uppercase text-[0.9375rem] tracking-[3px]">
      {content}
    </button>
  );
};

export default Button;
