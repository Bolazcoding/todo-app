import moon from "../assets/icon-moon.svg";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-bg-card text-2xl tracking-widest font-bold">TODO</h1>
      <img src={moon} alt="moon-icon" className="w-4.5" />
    </header>
  );
}

export default Header;
