import * as React from "react";

type ButtonOneProps = {
  text: string;
};

function ButtonOne(props: ButtonOneProps) {
  return <button className="button-one">{props.text}</button>;
}

export { ButtonOne };
