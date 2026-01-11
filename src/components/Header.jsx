function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-[hsl(0,0%,98%)] text-4xl tracking-widest font-medium">
        TODO
      </h1>
      <button
        className="border-0 cursor-pointer"
        onClick={() => document.documentElement.classList.toggle("dark")}
      >
        <img
          src="/images/icon-moon.svg"
          className="w-6.5 dark:hidden"
          alt="theme-change"
        />
        <img
          src="/images/icon-sun.svg"
          className="w-6.5 hidden dark:block"
          alt="theme-change"
        />
      </button>
    </header>
  );
}

export default Header;
