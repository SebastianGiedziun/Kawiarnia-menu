import CoffeeCard from "./CoffeeCard"

function CoffeeList({ dataArray }) {

    return (
        <div className="coffee-list"> 
        {
            dataArray.map(
                (coffee) => (
                    <CoffeeCard name={coffee.name} description={coffee.description} isNew={coffee.isNew} type={coffee.type} />

                )
            )
        }
        </div>
    )
}

export default CoffeeList