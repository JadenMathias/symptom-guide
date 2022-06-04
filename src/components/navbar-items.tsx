import * as React from "react";
import * as ReactDOM from "react-dom";

type NavbarItemsProps = {
  items: Array<string>;
};

function NavbarItems(props: NavbarItemsProps) {
  return (
    <ul>
      {props.items.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}

export { NavbarItems };
