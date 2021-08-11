import StyledCardProfile from "./styled";
import Image from '../../assets/profile.jpeg'

export default function CardProfile(){
    return <StyledCardProfile>
        <div>
            <img src={Image} alt='profle' />
            <section>
                <h2>Dinossauro Mutante Legal</h2>
                <p><strong>26 </strong>anos</p>
            </section>
        </div>
        <div>
            <p>Bio: industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
</p>
        </div>
    </StyledCardProfile>
}