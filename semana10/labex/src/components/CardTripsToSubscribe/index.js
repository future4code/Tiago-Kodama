export default function CardTripsToSubscribe({object}){
    const titles = Object.keys(object)
    return <div>
        {titles.map((title, index) => (
            <p key={index}>{title}: {object[title]}</p>
        ))}
    </div>
}