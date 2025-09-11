import { Outlet } from 'react-router-dom';




const Root = () => {

  return (
    <div className="">
     <div>Header is here</div>
    <Outlet></Outlet>
    <p>footer.</p>
    </div>
  );
};

export default Root;