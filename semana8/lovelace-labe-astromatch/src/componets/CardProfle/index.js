import StyledCardProfile from "./styled";

export default function CardProfile({profile}){
    return <StyledCardProfile>
        <div>
            <img src={profile.photo} alt='profle' />
            <section>
                <h2>{profile.name}</h2>
                <p><strong>{profile.age} </strong>anos</p>
            </section>
        </div>
        <div>
            <p>{profile.bio}</p>
        </div>
    </StyledCardProfile>
}