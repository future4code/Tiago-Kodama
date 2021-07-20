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
const Edit = styled.div`
  display: ${({editMode}) => (editMode ? 'block' : 'none')};
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    inputEditMode: '',
    inputFiltrarNome: '',
    filtro: '',
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

  onChangeInputEditMode = event => {
    this.setState({ inputEditMode: event.target.value })
  }

  onChangeInputFilter = event => {
    this.setState({ inputFiltrarNome: event.target.value })
  }

  criaTarefa = () => {
    const textoNovaTarefa = this.state.inputValue
    const novaTarefa = {
        id: Date.now(),
        texto: textoNovaTarefa,
        completa: false,
        editMode: false
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

  activeEditMode = id => {

    const novaLista = this.state.tarefas.map( tarefa => {
      if(tarefa.id === id) return { ...tarefa, editMode: true }
      return tarefa
    })

    this.setState({ tarefas: novaLista, editMode: true })
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

  removerTodasTarefas = () => {
    this.setState({ tarefas: [] })
  }

  doChangeTarefa = id => {
    const novaLista = this.state.tarefas.map( tarefa => {
      if( tarefa.id === id ) 
        return {...tarefa, texto: this.state.inputEditMode, editMode: false}
      return tarefa
    })

    this.setState({ tarefas: novaLista, inputEditMode: ''})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {

      const filtroSelecao = this.state.filtro 
      const tarefaCompleta = filtroSelecao ? (tarefa.completa ? 'completas':'pendentes' ) : '' 
      const filtroTexto = this.state.inputFiltrarNome
      const texto = tarefa.texto


      return texto.includes(filtroTexto) && filtroSelecao===tarefaCompleta
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
          <input onChange={this.onChangeInputFilter}/>
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
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.selectTarefa(tarefa.id)}>Check</button>
                <button onClick={() => this.removerTarefa(tarefa.id)}> Remover </button>
                <button onClick={()=> this.activeEditMode(tarefa.id)} >Editar</button>
                <Edit editMode={tarefa.editMode}>
                  <input value={this.state.inputEditMode} onChange={this.onChangeInputEditMode}/>
                  <button onClick={()=> this.doChangeTarefa(tarefa.id)} >Pronto</button>
                </Edit>

              </div>
            )
          })}
        </TarefaList>
          <button onClick={this.removerTodasTarefas}>Remover todos fuhahahaha</button>
      </div>
    )
  }
}

export default App
