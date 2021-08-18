import { useProtectPage } from "../../hooks/useProtectPage"

export default function CreateTripPage(){

    useProtectPage()
    return <p>CreateTripPage</p>
}