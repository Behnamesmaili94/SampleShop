import {useDispatch, useSelector} from "react-redux";

export const ContactUs = () => {
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    const Count = ()=>{
        dispatch({type:"inc",payload:10})
    }

    return(
      <div className={"flex flex-col justify-items-center"}>
          <div>
              {counter}
              <button onClick={Count}>count</button>
          </div>
          <div>
              <button type="button" className="bg-indigo-500 h-16 w-16 text-sm" disabled>
                  <img className={"animate-spin h-8 w-8"} src={require("../assests/icons8-loading-48.png")} alt={"not found"}/>
                  Processing...
              </button>
          </div>

      </div>
    )
}

