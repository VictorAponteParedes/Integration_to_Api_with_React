import React  from "react";

const Nabvar =({brand})=>{

return(
<nav className="navbar navbar-dark bg-dark">
      <div  className ='container'>
        <li>
          <a className='navbar-brand text-uppercase' href ="/">{brand}</a>
        </li>
      </div>
    </nav>
)

}
export default Nabvar; 