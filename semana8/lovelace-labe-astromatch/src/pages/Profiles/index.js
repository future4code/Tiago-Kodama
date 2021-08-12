import CardProfile from "../../componets/CardProfle";
import Image from '../../assets/circle.png'
import {StyledContainerProfiles, StyledButtonContainer} from './styled'

export default function Profiles(){
    return (
        <StyledContainerProfiles>
            <CardProfile />

            <StyledButtonContainer>
                <button>
                    <img src={Image} alt='button' draggable="false"/>
                </button>
                <button>
                    <img src={Image} alt='button' draggable="false"/>
                </button>
            </StyledButtonContainer>
        </StyledContainerProfiles>
    );
}