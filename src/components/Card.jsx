
export const Card = ({apiData})=>{

    return (
        <div className={"flex flex-wrap justify-center m-2 gap-x-8 "}>
            {apiData.map((x)=>
                    <div className={"flex flex-col w-80 h-[350px] border-2 mt-8 rounded-xl shadow-lg"} key={x.Id}>
                        <img className={"ml-8 mt-2 rounded-l"} src={require("../assests/gt-jump-2-mens-basketball-shoe.png")} alt={"not found"} width={185} height={150}/>
                        <div className={"ml-8 mt-2 text-zinc-800"}>
                            <p className={"text-zinc-800 font-bold"}>{x.Title}</p>
                            <p>Price : {x.Price}</p>
                            <p>Color : {x.color}</p>
                            <button className={"mt-4 bg-sky-100 opacity-90 shadow-md border-opacity-90 border-2 rounded-xl h-8 w-16"}>submit</button>
                        </div>

                    </div>)
            }
        </div>)
}

