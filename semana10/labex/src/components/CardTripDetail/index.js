export default function CardTripDetail({object}){

    return <div>
        <p>Data: {object.date}</p>
        <p>Duração: {object.durationInDays}</p>
        <p>Id: {object.id}</p>
        <p>Planeta: {object.planet}</p>
        <p>Nome: {object.name}</p>
        <p>Descrição: {object.description}</p>
    </div>
}