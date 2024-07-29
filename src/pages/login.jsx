import { Header } from "../components/header";

export const Login = () => {
  return (
    <>
      <Header />
      <div className="bg-cyan-800 min-h-screen flex items-center justify-center">
        <div className="relative bg-sky-blue-100 rounded-md shadow bg-white shadow-blue-600 p-10 items-center flex flex-col justify-between w-91 max-w-4xl h-[30rem]">
          <form action="">
            <h1 className="font-bold text-lg text-center">LOGIN</h1>
           
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email"
                className="w-[30rem] p-2 border border-gray-300 rounded-md hover:border-cyan-800"
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                placeholder="Password"
                className="w-[30rem] p-2 border border-gray-300 rounded-md hover:border-cyan-800"
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="bg-white text-cyan-800 border border-cyan-800 px-7 py-2 rounded-md hover:bg-cyan-800 hover:text-white transition-colors duration-300 mt-8"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
