import { useState } from "react";

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, title, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // cities.pop();
  // cities.pop();
  // cities.pop();

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul className="list-group">
          {items.map((city, index) => (
            <li
              className={
                "list-group-item " + (index === selectedIndex && "active")
              }
              key={city}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(city)
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
