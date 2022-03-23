import React from 'react';
import {add,sub,mult,div} from './Cal';

function App(){
return(
<>
<ul>
<li>the number is {add (40,4)} </li>
<li>the number is {sub (40,4)} </li>
<li>the number is {mult (40,4)} </li>
<li>the number is {div (40,4)} </li>
</ul>

</>
);

}
export default App;