interface ButtonProps {
  text: string;
  size: "small" | "large";
  link: string;
  type: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-[#E7131A] py-3 md:py-4 px-6 rounded mt-1 md:mt-3 max-w-fit leading-none text-base">
      {text}
    </button>
  );
};

export default Button;
