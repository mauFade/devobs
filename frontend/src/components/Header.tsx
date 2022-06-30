import { Code } from "phosphor-react";

const Header = () => {
  return (
    <header className="bg-zinc-800 h-16 text-2xl flex items-center justify-center border-b border-zinc-600 space-x-3">
      <Code size={36} weight="bold" />
      <h1 className="font-bold">Devobs - A casa dos devs que procuram jobs</h1>
    </header>
  );
};

export default Header;
