import Profile from "../end/components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"]
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"]
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"]
  }
]

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            <Profile {...person}/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
