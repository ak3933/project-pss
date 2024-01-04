export default function AboutCard(){
    return(
        <div className="h-32 w-48 mx-4">
            <img className="rounded-full" src={require("../images/about_1.jpg")} alt="alt text">
            </img>
            <h3>Learn Who are We?</h3>
            <svg className="h-4 w-4"></svg>
            <p>We are who We are who We are who We are who We are who We are who We are who We are who </p>
            <a className="text-red-600">Read more →</a>
        </div>
    )
}