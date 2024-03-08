import ItemCount from "../ItemCount/ItemCount"

// eslint-disable-next-line react/prop-types, no-unused-vars
const ItemDetail = ({id, name, img, category, description, price, stock}) => 
{
    return (
        <article className="CardItem">
            <header>
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
                
            <picture>
                <img src={img} alt={name} style={{width: 100}} className="ItemImg" />
            </picture>

            <section>
                <p className="Info">
                    Categoría: {category}
                </p>

                <p className="Info">
                    Descripción: {description}
                </p>

                <p className="Info">
                    Precio: ${price}
                </p>
            </section>

            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail