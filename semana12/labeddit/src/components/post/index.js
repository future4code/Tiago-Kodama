import { StyledPost, StyledButton } from './styled'

export default function Post(){
    return (
        <StyledPost>
            <aside>
                votes
            </aside>
            <header>
                <h4>Name</h4>
                <h5>25/08/</h5>
            </header>
            <main>
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
            </main>
            <footer>
                <StyledButton
                    variant="outlined"
                >595 Comments</StyledButton>
            </footer>
        </StyledPost>
    );
}