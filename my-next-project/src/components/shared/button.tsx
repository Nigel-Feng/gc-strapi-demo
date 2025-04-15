import classNames from "classnames";

interface ButtonProps {
  text: string;
  size?: "small" | "large";
  link?: string;
  type?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={classNames(
        "bg-[#E7131A] text-nowrap text-white py-3 md:py-4 px-6 rounded leading-none text-base",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
