import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify( this.state.tarefas ))
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    this.setState({ tarefas: tarefas })
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const textoNovaTarefa = this.state.inputValue
    const novaTarefa = {
        id: Date.now(),
        texto: textoNovaTarefa,
        completa: false
      }


    this.setState({ tarefas: [...this.state.tarefas, novaTarefa], inputValue: '' })

  }

  selectTarefa = (id) => {
    const novaLista = this.state.tarefas.map(tarefa => {
      if( tarefa.id === id )
        return {...tarefa, completa: true}
         
      return tarefa
    })

    this.setState({ tarefas: novaLista })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  removerTarefa = id => {

    const novaLista = this.state.tarefas.filter( tarefa => {
      return tarefa.id!==id
    })

    this.setState({ tarefas: novaLista })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <div key={tarefa.id}
              >
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.removerTarefa(tarefa.id)}> Remover </button>
              </div>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
