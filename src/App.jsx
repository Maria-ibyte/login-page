import imgAnimada from "../public/animada.svg"

export default function App(){
    return (
      <div className="w-full h-screen flex bg-[#201B2C]">
        <div className="W-[50%] h-full flex items-center justify-center flex-col">
            <h1 className="text-[30px] font-bold text-[#008cff]">Entre para o nosso time</h1>
            <img src={imgAnimada} alt="imagem-anima" width={500}/>
        </div>
        <div className="w-[50%] h-full items-center justify-center">  
            <div className="w-[50%] h-[50px] bg-[#2F2942] rounded-xl"></div>
                <div className="w-full h-[5%] bg-amber-50"></div>
                <h1 className="text-[20px] text-[#8466e9] font-bold">LOGIN </h1>
                <div className="w-full h-[70%] bg-gray-800">
                  <label htmlFor="user" className="text-white">Usuário</label>
                  <input type="text" id="user" className="w-full rounded-md p-[20px] bg-[#514768] text-white m-4" />
                  <input type="text" />
                </div>
                <div className="w-full h-[10%] bg-gray-800"></div>
s        </div>
      </div>
      
    )
}