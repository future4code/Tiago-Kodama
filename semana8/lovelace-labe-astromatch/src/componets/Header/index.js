import ImageButtonFind from '../../assets/achar.png'
import ImageButtonMatch from '../../assets/match.png'
import ImageButtonClean from '../../assets/clean.png'
import StyledHead from './styled'

export default function Header({ setCurrentPage }) {
    return (
        <StyledHead>
            <div>
                <button
                    onClick={() => setCurrentPage('profiles')}
                >
                    <img
                        src={ImageButtonFind}
                        alt='Botao'
                        draggable="false"
                    />
                </button>

                <button
                    onClick={() => setCurrentPage('matches')}
                >
                    <img
                        src={ImageButtonMatch}
                        alt='Botao'
                        draggable="false"
                    />
                </button>

                <button
                    onClick={() => setCurrentPage('clean')}
                >
                    <img
                        src={ImageButtonClean}
                        alt='Botao'
                        draggable="false"
                    />
                </button>
            </div>
        </StyledHead>
    );
}