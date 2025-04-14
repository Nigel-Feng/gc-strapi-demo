const Footer: React.FC<any> = ({ content }) => {
  return (
    <footer className="bg-[#e7e7e7] h-[120px] flex items-center justify-around flex-none">
      <span>{content.footer.config.text}</span>
    </footer>
  );
};

export default Footer;
