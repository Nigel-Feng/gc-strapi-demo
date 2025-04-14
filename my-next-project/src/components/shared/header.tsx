const Header: React.FC<any> = ({ content }) => {
  return (
    <header className="bg-[#e7e7e7] h-[120px] flex items-center justify-around flex-none">
      <span>{content.header.config.text}</span>
    </header>
  );
};

export default Header;
