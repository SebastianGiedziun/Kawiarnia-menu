function CoffeeCard({ name, type, description, isNew }) {
function isCoffeeNew() {
    // if (isNew == true) {
    //     return <p>Ta kawa jest nowa w ofercie</p>
    // } else {
    //     return null
    // }
    return isNew === true ? <p>Ta kawa jest nowa w ofercie</p> : null
}
    return (
        <div className="coffe-card">
            <h2>{name}</h2>
            <p>{type}</p>
            <p>{description}</p>
            {
                // isCoffeeNew()
                isNew === true ? <p>Ta kawa jest nowa w ofercie</p> : null
            }
        </div>
    )

}

export default CoffeeCard