import './App.css'
import Friends from './Friends';
import Doctor from './Doctor';
import Count from './Count';
import Team from './team';
import User from './User';
import Mates from './Mates';
import Posts from './Posts';
function App() {
  const friends = [
    { name: "sadik", id: 2, age: 30 },
    { name: "jamir", id: 1, age: 32 },
    { name: "mahbub", id: 4, age: 20 },
    { name: "tofazzal", id: 5, age: 40 }
  ];
  const doctors = ['alamgir', 'kuddus', 'al-amin', 'sakhayat hossain'];

  function handleClick() {
    alert('button clicked');
  }
  const handleBtn = () => {
    alert('btn 2 clicked');
  }
  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <Posts></Posts>
      {/* <Mates></Mates> */}
      {/* <Team></Team>
      <Count></Count>
      <User></User> */}
      {/*    {
        doctors.map(doctor => <Doctor name={doctor}></Doctor>)
      } */}

      {/*       {
        friends.map(friend => <Friends friend={friend}></Friends>)
      } */}
      {/* <h3>Explore react core concepts part 2</h3>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleBtn}>click me 2</button>
      <button onClick={() => { alert('third click') }} >click me 3 </button>
      <button onClick={() => { addToFive(3) }}>add</button> */}
    </>
  )
}

export default App
