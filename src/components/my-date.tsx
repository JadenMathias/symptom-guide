import * as React from "react";
let isDate = false;

function MyDate() {
  let [date, setDate] = React.useState("Click for Date!");

  let findDate = () => {
    if (!isDate) {
      isDate = true;
      setDate(new Date().toDateString());
    } else {
      isDate = false;
      setDate("Click for date!");
    }
  };

  return (
    <div>
      <button className="button-style" onClick={findDate}>
        {date}
      </button>
    </div>
  );
}

export { MyDate };
