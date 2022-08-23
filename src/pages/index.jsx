import Navegador from '../components/Navegador'
function Inicio(){
    //return "<h1>Título</h1>"
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            flexWrap:'wrap'
        }}>
           <Navegador texto="Estiloso" destino="/estiloso"></Navegador> 
           <Navegador texto="Exemplo" destino="/exemplo" cor="#0e6a26"></Navegador> 
           <Navegador texto="JSX" destino="/jsx" cor="crimson"></Navegador> 
           <Navegador texto="Navegação 01" destino="/navegacao" cor="green"></Navegador> 
           <Navegador texto="Navegação 02" destino="/cliente/sp-2/123" cor="blue"></Navegador> 
           <Navegador texto="Componente com Estado" destino="/estado" cor="pink"></Navegador> 
           <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#f90"></Navegador> 
           <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a"></Navegador> 
        </div>
    )
}

export default Inicio