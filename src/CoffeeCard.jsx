function CoffeeCard({ name, type, description, isNew }) {

    return (
        <div className="coffe-card">
            <h2>{name}</h2>
            <p>{type}</p>
            <p>{description}</p>
        </div>
    )
}

export default CoffeeCard