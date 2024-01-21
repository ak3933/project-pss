import AboutCard from "./AboutCard"
import jsonData from "../Resources/Content/main.json"

export default function Main() {
    return (
        <div className="mb-32">
            <img className="w-full max-h-96"
                src={require("../Resources/images/banner.jpg")}
            />
            <div className="mx-40 py-20">
                <div className="grid grid-cols-12 -mt-20 bg-white w-full py-5 px-24">
                    <img className=" col-start-1 col-end-3" src="" alt="picture of the quoter"></img>
                    <p className="col-start-3 col-end-10">
                        {jsonData.data.quotes[0].text}
                    </p>
                    <p className="col-start-10 col-end-12">
                        {jsonData.data.quotes[0].author}
                    </p>
                </div>
                <div className="flex justify-center items-center py-24">
                    <hr className="w-1/3 m-1 border-zinc-400"></hr>
                    <h2 className="text-zinc-600 text-3xl px-2 text-center">Who are we?</h2>
                    <hr className="w-1/3 m-1 border-zinc-400"></hr>
                </div>
                <div className="lg:grid-cols-4 lg:grid md:sm:flex md:sm:flex-col mx-20 place-items-center ">
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                </div>
            </div>
            
        </div>
    )
}