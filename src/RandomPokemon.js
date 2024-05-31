import "./randompokemon.css";
export default function RandomPokemon() {
  const num = Math.ceil(Math.random() * 200) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`;
  return (
    <div className="RandomPokemon">
      <h2>Pokemon Number {num} 🫣</h2>
      <img src={url}></img>
    </div>
  );
}
