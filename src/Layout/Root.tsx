import { Outlet } from 'react-router-dom';




const Root = () => {

  return (
    <div className="">
    <Outlet></Outlet>
    <p>footer.</p>
    </div>
  );
};

export default Root;