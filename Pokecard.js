/** This will be used to show a single pokemon card with their name, image, and type*/
function Pokecard({ id, name, type, base_experience }) {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      {image}
      <p>Type: {type}</p>
      <p>Experience: {base_experience}</p>
    </div>
  );
}
