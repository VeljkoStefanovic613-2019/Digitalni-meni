import {Link} from "react-router-dom";
import Logo from "../assets/logo.png"
 


export const Header = () => {
  return (
    <header className="bg-crna-100 flex justify-center flex-col items-center">
      <Link to="/">
        <img src={Logo} className="mx-auto" alt="" style={{ height: '100px' }}/>
      </Link>
      
    </header>
  )
}
