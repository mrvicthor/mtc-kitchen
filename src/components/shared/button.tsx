type ButtonProps = {
  content: string;
  styles?: string;
};
const Button = ({ content, styles }: ButtonProps) => {
  return (
    <button
      className={`${
        styles ? styles : "w-[14.25rem] h-15"
      } bg-[#d4b254] banner-btn text-white transition rounded-[1.875rem] cursor-pointer hover:bg-transparent hover:border hover:border-[#d4b254] hover:text-[#d4b254] uppercase text-[0.9375rem] tracking-[3px]`}
    >
      {content}
    </button>
  );
};

export default Button;
