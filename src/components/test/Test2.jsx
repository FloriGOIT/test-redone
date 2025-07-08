// use Context hook
import { useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types"
import { useUserContect } from "components/App"

export const PreferenciesSection = () => {
        const arr= ["apple", "cherries"]
        return <User fruits={arr}/>
}

const User = (props) => {
        const {ana, flori, nameUser} = useUserContect();
        return (
                <div>
                        <button type="button" onClick={ana}>Ana</button>
                        <button type="button" onClick={flori}>Flori</button>
                        <br /><br />
                        {nameUser === "" && <p>Press a button from above.</p>}
                        {nameUser === "Ana" && <p>{nameUser} prefers to eat {props.fruits[0]}.</p>}
                        {nameUser === "Flori" && <p>{nameUser} prefers to eat {props.fruits[1]}.</p>}
</div>

        )

}

User.propTypes = {name:PropTypes.string}

/*
 in app fac:
 const UserContext = createContext();
 export const useUserContect = () => useContext(UserContext);

 adaug componenta in app:
 <UserContext.Provider value={{key: value}}>

        <Child/>
        
 </UserContext.Provider>

 const Child = () => {
        
        return <Nephew/>}
const Nephew =() => {
        const {key} = useUserContext();
        return <p>{key}</p>
        }


*/





export function PreviousValueTracker() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef("-");

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
/*
Increment was clicked:
1. state is updated and a re-render is programed;
2. re-render and real-DOM updated;
3. useEffect runs (prevCountRef.curent = count does not gnerate a rerender as hook, it just stores value)

*/


