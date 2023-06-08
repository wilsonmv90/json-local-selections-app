function Cards({ item }) {
    const { name, titulos, image } = item;
    //function Cards(props)...//
    //const {name, cantidad}= props.item ---> destructuracion de props
    return (
      <>
        <div className="bg-white my-3 mx-0 d-flex  rounded-4">
          <img className="w-50" src={image} alt="image" />
          <div className="text-warning bg-success pt-5  w-100 text-center">
            <h2>{name}</h2>
            <h3>Titulos = {titulos}</h3>
          </div>
        </div>
      </>
    );
  }
  
  export default Cards;
  