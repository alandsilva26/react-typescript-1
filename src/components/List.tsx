import React from "react";

import { PeopleState as IProps } from "../App";

const List = ({ people }: IProps): JSX.Element => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return <li key={index}>{person.name}</li>;
    });
  };

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
