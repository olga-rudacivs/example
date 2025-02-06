
export default function PokemonCard({ pic, name, weight }) {
    return (
        <>
            <p>{name}</p>
            <img src={pic} alt={name} />
            <p>{weight}</p>
          
        </>
    );
}
