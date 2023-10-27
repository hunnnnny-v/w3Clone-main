import { Link } from "react-router-dom";

const BelowNavbar = () => {
  return (
    <div className="h-10 lg:w-full w-[100%]  bg-[#282A35] flex gap-x-10 text-white p-2  overflow-hidden">
      <Link to="/html">
        <div className="hover:scale-105 cursor-pointer">
          <p>HTML</p>
        </div>
      </Link>

      <Link to="/css">
        <div className="hover:scale-105 cursor-pointer">
          <p>CSS</p>
        </div>
      </Link>

      <Link to={"/js"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>JAVASCRIPT</p>
        </div>
      </Link>
      <Link to={"/sql"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>SQL</p>
        </div>
      </Link>

      <Link to={"/python"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>PYTHON</p>
        </div>
      </Link>
      <Link to={"/java"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>JAVA</p>
        </div>
      </Link>
      <Link to={"/c"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>C</p>
        </div>
      </Link>
      <Link to={"/c++"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>C++</p>
        </div>
      </Link>
      <Link to={"/chash"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>C#</p>
        </div>
      </Link>
      <Link to={"/bootstrap"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>BOOTSTRAP</p>
        </div>
      </Link>
      <Link to={"/react"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>REACT</p>
        </div>
      </Link>

      <Link to={"/php"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>PHP</p>
        </div>
      </Link>

      <Link to={"/mysql"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>MYSQL</p>
        </div>
      </Link>


      <Link to={"/nodejs"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>NODEJS</p>
        </div>
      </Link>

      
      <Link to={"/git"}>
        <div className="hover:scale-105 cursor-pointer">
          <p>GIT</p>
        </div>
      </Link>
    </div>
  );
};

export default BelowNavbar;
