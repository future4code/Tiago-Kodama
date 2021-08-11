import ImageCircle from '../../assets/circle.png'
import StyledHead from './styled'

export default function Header({ setCurrentPage }) {
    return (
        <StyledHead>
            <button
                onClick={() => setCurrentPage('profiles')}
            >
                <img
                    src={ImageCircle}
                    alt='Botao'
                />
            </button>

            <button
                onClick={() => setCurrentPage('matches')}
            >
                <img
                    src={ImageCircle}
                    alt='Botao'
                />
            </button>

            <button
                onClick={() => setCurrentPage('clean')}
            >
                <img
                    src={ImageCircle}
                    alt='Botao'
                />
            </button>
        </StyledHead>
    );
}