import {Button} from "../component/index";


const DashboardPage = ()=> {
  
  return (
    <>
    <div className="container">
      <h1 className="Dash-head bg-dark text-center">Welcome to DashboardPage </h1>
      <Button buttonText="Primary"/>
      <Button buttonText="Secondary"/>
      <Button buttonText="Success"/>
      <Button buttonText="Danger"/>
      <Button buttonText="Warning"/>
      <Button buttonText="Info"/>

      </div>
    </>
  );
}

export default DashboardPage;
