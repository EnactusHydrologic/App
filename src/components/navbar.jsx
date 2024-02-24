import React from "react"; 
import { Link } from 'react-router-dom';

// export const Navbar = () => {

//     return(
//         <div classname="navbar">
//             <div classname="button-container">
                
//                 <button type="button" class="main_button">
//                     <Link to = "/"> Shop </Link>
//                 </button>

//                 <button type="button" class="compare_button">
//                     <Link to = "/compare"> Compare </Link>
//                 </button>
            
//             </div>
//         </div>
//     );

// }

export const Navbar = () => {

  // const history = useHistory();

  // const handleHomeClick = () => {
  //   history.push('/');
  // };

  // const handleCompareClick = () => {
  //   history.push('/compare');
  // };

      return(
        
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Hydrologic</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
          <li class="nav-item ml-2">
          <Link to="/" className="nav-link">Home <span className="sr-only"></span></Link>
          </li>
          
          <li class="nav-item ml-2">
          <Link to="/compare" className="nav-link">Compare <span className="sr-only"></span></Link>
          </li>
     
        </ul>
      </div>
    </nav>

      );
}




