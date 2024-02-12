interface HeaderProps {
  courseName: string;
}

const Header = ({ courseName }: HeaderProps) => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  );
};

export default Header;
