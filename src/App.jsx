import imgAnimada from "../public/animada.svg"

export default function App() {
  return (
    <div className="w-full h-screen flex bg-[#201B2C]">
      <div className="W-[50%] h-full flex items-center justify-center flex-col">
        <h1 className="text-[30px] font-bold text-[#008cff]">Entre para o nosso time</h1>
        <img src={imgAnimada} alt="imagem-anima" width={500} />
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[50%] h-[350px] bg-[#2F2942] rounded-xl">
          <div className="w-full h-[15%] flex items-center justify-center">
            <h1 className="text-[20px] text-[#8466e9] font-bold">LOGIN </h1>
          </div>
          <div className="w-full h-[70%] p-[20px]">
            <label htmlFor="user" className="text-white">Usuário</label>
            <input type="text" id="user" className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-4" />
            <label htmlFor="pass" className="text-white">Senha</label>
            <input type="password" id="pass" className="w-full rounded-md bg-[#514768] p-[10px] text-white" />
          </div>
          <div className="w-full h-[10%]">

          </div>
        </div>

      </div>
    </div>

  )
}