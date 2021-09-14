import { useState } from "react";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface PeopleState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

const App = (): JSX.Element => {
  const [people, setPeople] = useState<PeopleState["people"]>([
    {
      name: "Lebron James",
      url:
        "https://static.highsnobiety.com/thumbor/u_0eC5bEFGgGwuHoYdja4Snjuvk=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/03/12094519/nba-suspends-season-coronavirus-01.jpg",
      age: 36,
      note: "Allergic to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      url:
        "https://static.highsnobiety.com/thumbor/u_0eC5bEFGgGwuHoYdja4Snjuvk=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/03/12094519/nba-suspends-season-coronavirus-01.jpg",
      age: 32,
    },
  ]);

  return (
    <div className="App">
      <h1>People invited</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
