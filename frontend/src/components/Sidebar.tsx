import { GithubLogo, Handshake, Laptop, UserCircle } from "phosphor-react";

const Sidebar = () => {
  return (
    <div className="bg-zinc-800 w-80 h-full flex flex-col border-r border-zinc-600">
      <div className="flex flex-col pt-6">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-zinc-700 transition-colors h-14 flex items-center justify-center mx-6 border-b border-zinc-600"
        >
          <Laptop size={32} className="pr-2" />
          Vagas
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-zinc-700 transition-colors h-14 flex items-center justify-center mx-6 border-b border-zinc-600"
        >
          <GithubLogo size={32} className="pr-2" />
          Projetos
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-zinc-700 transition-colors h-14 flex items-center justify-center mx-6 border-b border-zinc-600"
        >
          <Handshake size={32} className="pr-2" />
          Empresas
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-zinc-700 transition-colors h-14 flex items-center justify-center mx-6 border-b border-zinc-600"
        >
          <UserCircle size={32} className="pr-2" />
          Seu perfil
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
