import React from 'react';
import './styles/App.css';
import { useSelector } from 'react-redux';
import { SignIn } from 'components/users/SignIn';
import { SignUp } from 'components/users/SignUp';
import { PlotDashboard } from 'components/plots/PlotDashboard';

function App() {

  const sign = useSelector((state:any) => {
    return state.userReducer
  });

  if (sign.isSignIn) {
    return (
      
      <div className="PlotDashboard">
        <PlotDashboard /> 
      </div>
    );
  }
  
  return (
    <div className="Sign">
        <SignIn />
        <SignUp />
    </div>
  );
}

export default App;
