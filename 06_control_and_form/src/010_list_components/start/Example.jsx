
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>)
  }

  const helloanimals = animals.map((animal) => <li>Hello, {animal}</li>);
  // 式はreturnに記述できない
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {animalList}
        {helloanimals}
      </ul>
    </>
  );
};

export default Example;
