import "@/app/style.css";

export default function Home(){
    let content=(
        <div className="shadow-2xl sm:w-2/4 mx-auto mt-40 pb-14">
            <h1 className="bg-amber-400 p-3 text-center uppercase text-xl font-bold">My Weather</h1>
            <div className="w-1/3 mx-auto bg-blue-100 mt-12 border-b-2 border-b-slate-200">
                <p>Location</p>
                <div className="flex justify-between">
                <input placeholder="Enter City"/>
                <button>Set</button>
                </div>
            </div>

        <div className="flex mt-8 w-2/3 mx-auto shadow bg-slate-300 rounded-xl 
                        justify-around p-8 items-center">
            <div >
                <img src="/images/sun.webp" className="w-20"/>
            </div>
            <div>
                <h3 className="font-bold text-2xl">30<sup>0</sup></h3>
                <p className="font-bold mt-4">Sunshine</p>
                <p>{Date()}</p>
            </div>
        </div>

        </div>
    )
    return content;

}