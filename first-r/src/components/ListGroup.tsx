function ListGroup() {
  const cities = ["Paris", "Rome", "Kazan"];

  cities.pop();
  cities.pop();
  cities.pop();
  if (cities.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No items</p>
      </>
    );

  return (
    <>
      <h1>List group</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
