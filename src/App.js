import React from 'react';
import CounterButton from "./components/CounterButton";
// import SpecialTextBox from "./components/SpecialTextBox";
import SpecialTextBoxContainer from "./containers/SpecialTextBoxContainer";
import Counter from "./components/Counter";
// import SpecialText from "./components/SpecialText";
import SpecialTextContainer from "./containers/SpecialTextContainer";
// import UserButtons from "./components/UserButtons";
import UserButtonsContainer from "./containers/UserButtonsContainer";
// import Thermostat from "./components/Thermostat";
import ThermostatContainer from "./containers/ThermostatContainer";
// import Users from "./components/Users";
import UsersContainer from "./containers/UsersContainer";
// import ChangeTemperature from "./components/ChangeTemperature";
import ChangeTemperatureContainer from "./containers/ChangeTemperatureContainer";
// import VideoPlayer from "./components/VideoPlayer";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";

// import VideoTextBox from "./components/VideoTextBox";
import VideoTextBoxContainer from "./containers/VideoTextBoxContainer";

// import CurrentCity from "./components/CurrentCity";
import CurrentCityContainer from "./containers/CurrentCityContainer";
//  import CityDropDown from "./components/CityDropDown";
import CityDropDownContainer from "./containers/CityDropDownContainer";
// import SearchTextBox from "./components/SearchTextBox";
import SearchTextBoxContainer from "./containers/SearchTextBoxContainer";

//import SortUsers from "./components/SortUsers";
import SortUsersContainer from "./containers/SortUsersContainer";
// import ScaleVideo from "./components/ScaleVideo";
import VideoScaleContainer from "./containers/VideoScaleContainer";
import Modal from "./components/Modal";
import ShowModal from "./components/ShowModal";

function App() {
  return (
      <div className="App">
        <div className="container">
        <CounterButton />
           <br />
          <SpecialTextBoxContainer />
           <br />
          <UserButtonsContainer />
          <br />
          <CityDropDownContainer />
           <br />
          <ChangeTemperatureContainer />
          <br />
          <SearchTextBoxContainer />
          <br />
          <VideoTextBoxContainer />
          <br />
          <SortUsersContainer />
          <br />
          <VideoScaleContainer />
          <br />
          <ShowModal />
        </div>
        <div className="container">
        <Counter />
          <br />
          <SpecialTextContainer />
          <br />
          <CurrentCityContainer />
          <br />
          <ThermostatContainer />
          <br />
          <VideoPlayerContainer />
          <br />


        </div>
        <div className="container">
        <UsersContainer />
        </div>
      <Modal />
      </div>
  );
}
export default App;
