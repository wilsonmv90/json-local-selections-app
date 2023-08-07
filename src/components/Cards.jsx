function Cards({ item }) {
  const { name, titulos, image } = item;
  //function Cards(props)...//
  //const {name, cantidad}= props.item ---> destructuracion de props
  return (
    <>
      <article className="bg-white my-3 mx-0 d-flex  rounded-4">
        <img className="w-50" src={image} alt="image" />
        <div className="text-warning bg-success pt-5 w-50 text-center">
          <h5>{name}</h5>
          <p>Titulos = {titulos}</p>
        </div>
      </article>
    </>
  );
}

export default Cards;
