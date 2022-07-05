import { User, Lock } from "phosphor-react";

const Login = () => {
  return (
    <div className="h-full flex items-center justify-center lg:justify-evenly">
      <div className="lg:bg-violet-800 lg:h-full lg:w-3/4"></div>
      <div className="bg-zinc-700 w-80 h-4/5 flex items-center justify-center flex-col rounded-3xl lg:mx-20 md:w-[30rem]">
        <h1 className="font-bold text-3xl pt-1">Login</h1>
        <form className="flex flex-col w-3/4 h-3/4 justify-center">
          <h3 className="flex flex-row items-center font-light ml-3">
            <User className="mr-1" />
            E-mail
          </h3>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            className="mb-3 mt-1 h-12 rounded-3xl bg-zinc-600 pl-4 focus:outline-none hover:bg-zinc-500 text-zinc-900"
          />
          <h3 className="flex flex-row items-center font-light ml-3">
            <Lock className="mr-1" />
            Senha
          </h3>
          <input
            type="text"
            placeholder="Digite sua senha"
            className="mb-3 mt-1 h-12 rounded-3xl bg-zinc-600 pl-4 focus:outline-none hover:bg-zinc-500 text-zinc-900"
          />
          <button
            type="submit"
            className="bg-violet-800 h-12 mt-6 rounded-3xl hover:bg-violet-600 hover:border border-violet-900"
          >
            Entrar
          </button>
        </form>
        <div className="flex flex-col items-center">
          <h2>Ainda não tem uma conta?</h2>
          <a
            href="/register"
            className="hover:font-semibold hover:underline underline-offset-2"
          >
            Registre-se
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
