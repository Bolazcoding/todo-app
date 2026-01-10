import moon from "../../public/images/icon-moon.svg";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-bg-card text-3xl tracking-widest font-bold">TODO</h1>
      <img src={moon} alt="moon-icon" className="w-5.5" />
    </header>
  );
}

export default Header;
