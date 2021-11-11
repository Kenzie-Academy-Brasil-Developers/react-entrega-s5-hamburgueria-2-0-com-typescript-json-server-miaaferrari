
interface ProductItems {
    name: string,
    category: string,
    image: string,
    price: number,
}

export const Product = (props: ProductItems) => {

    return (
        <div>
            <img src={props.image} alt={props.name}></img>
            <h2>{props.name}</h2>
            <span>{props.category}</span>
            <span>{props.price}</span>
            <button>Adicionar</button>
        </div>
    )
}