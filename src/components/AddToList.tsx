import React, { useState } from "react";
import { PeopleState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

function AddToList({ people, setPeople }: IProps): JSX.Element {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (!input.name || !input.url || !input.age) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: Number(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
  };

  return (
    <section id="form" style={{ marginLeft: "1em" }}>
      <form>
        <div className="form-group">
          <p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={input.name}
              onChange={handleChange}
            />
          </p>
        </div>
        <p>
          <input
            type="text"
            name="age"
            id="age"
            placeholder="Age"
            value={input.age}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Url"
            value={input.url}
            onChange={handleChange}
          />
        </p>
        <p>
          <textarea
            name="note"
            id="note"
            placeholder="Note"
            value={input.note}
            onChange={handleChange}
          />
        </p>
        <button onClick={handleClick}>Add to List</button>
      </form>
    </section>
  );
}

export default AddToList;
