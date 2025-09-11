import { Outlet } from 'react-router-dom';



const Root = () => {

  return (
    <div className="">
      here route root
    <Outlet></Outlet>
    <p>footer.</p>
    </div>
  );
};

export default Root;