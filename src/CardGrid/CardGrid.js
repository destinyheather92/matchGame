import Card from "../Card/Card";
import CardBack from "../CardBack/CardBack";
//function that will display the cards --whether or not they are flipped. if flipped is true on the rerender then the card will show, if not the back of card will show. 
export default function CardGrid({ data, handleClick }) {
  return (
    <>
      <div id="parentGridContainer">
        {data.map((e, i) => {
          return e.flipped ? (
            <Card
              className={`card ${e.value}`}
              id={e.id}
              value={e.value}
              src={e.path}
              key={i}
            />
          ) : (
            <CardBack
              className={`card ${e.value}`}
              func={handleClick}
              key={i}
              id={e.id}
            />
          );
        })}
      </div>
    </>
  );
}
