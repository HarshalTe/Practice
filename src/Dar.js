import { useDispatch, useSelector } from "react-redux";
import { add,del } from "./Redux/Darslice";

const Dar = () => {
    const { arrayfield, drop1data, drop2data } = useSelector((state) => state.deopdown);
    const dispatch = useDispatch();
    const Add = () => {
        dispatch(add());
    };
    const Del = (i)=>{
       dispatch(del({id:i}))
    }
    return (
        <>
            {arrayfield.map((ech, i) => {
                return (

                    <div key={i}>
                        <input name="filde1" placeholder="Field 1" />
                        <br />
                        <input name="filde1" placeholder="Field 2" />
                        <br />
                        <select name="drop1">
                            {drop1data.map((dd1, di1) => (
                                <option key={di1}>{dd1}</option>
                            ))}
                        </select>
                        <br />
                        <select name="drop2">
                            {drop2data.map((dd2, di2) => (
                                <option key={di2}>{dd2}</option>
                            ))}
                        </select>
                        <br />
                       <button onClick={()=>Del(i)}>DELETE</button>
                    </div>


                );
            })}
            <button onClick={Add}>ADD</button>

        </>
    );
};
export default Dar;

