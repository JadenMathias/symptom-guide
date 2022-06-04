import * as React from "react";

type HeaderProps = {
  text: string;
};

function Header(props: HeaderProps) {
  return <h1 className="header">{props.text}</h1>;
}
export default Header;
