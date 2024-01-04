import AboutCard from "./AboutCard"
export default function Main() {
    return (
        <div className="mb-32">
            <img className="w-full max-h-96"
                src={require("../images/banner.jpg")}
            />
            <div className="mx-40 py-20">
                <div className="flex justify-center items-center py-24">
                    <hr className="w-1/3 m-1 border-zinc-400"></hr>
                    <h2 className="text-zinc-600 text-3xl px-2">Who are we?</h2>
                    <hr className="w-1/3 m-1 border-zinc-400"></hr>
                </div>
                <div className="flex justify-around mx-20 text-center">
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                </div>
            </div>
            
        </div>
    )
}