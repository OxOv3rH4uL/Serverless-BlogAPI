import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import CustomAvatar from "./Avatar";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-900"><Link to="/blogs">BlogSpace</Link></h1>
      <div className="flex items-center gap-4">
        <Button onClick={()=>navigate('/publish')}>New Post</Button>
          <Link to="/profile"> <CustomAvatar/></Link>
          
      </div>
    </nav>
  );
};

export default Navbar;
