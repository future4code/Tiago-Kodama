import ImageCircle from '../../assets/circle.png'
import StyledHead from './styled'

export default function Header({ setCurrentPage }) {
    return (
        <StyledHead>
            <div>
                <button
                    onClick={() => setCurrentPage('profiles')}
                >
                    <img
                        src={ImageCircle}
                        alt='Botao'
                        draggable="false"
                    />
                </button>

                <button
                    onClick={() => setCurrentPage('matches')}
                >
                    <img
                        src={ImageCircle}
                        alt='Botao'
                        draggable="false"
                    />
                </button>

                <button
                    onClick={() => setCurrentPage('clean')}
                >
                    <img
                        src={ImageCircle}
                        alt='Botao'
                        draggable="false"
                    />
                </button>
            </div>
        </StyledHead>
    );
}