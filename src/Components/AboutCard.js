export default function AboutCard() {
    return (
        <div className="w-48 mx-4 text-center my-8">
            <img className="rounded-full p-2 border-[1px] hover:border-orange-600 hover:bg-orange-600" src={require("../Resources/images/about_1.jpg")} alt="alt text">
            </img>
            <h3 className="py-2">Learn Who are We?</h3>
            <svg class="h-8 w-8 text-gray-300 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="py-4">We are who We are who We are who We are who We are who We are who We are who We are who </p>
            <a className="text-red-600">Read more →</a>
        </div>
    )
}