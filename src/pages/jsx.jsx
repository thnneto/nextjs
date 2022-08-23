import Layout from "../components/Layout"
function Inicio(){
    //return "<h1>Título</h1>"
    const a = 4
    const b = 3
    const obj = {nome:"João",idade:30}
    const tituloH2 = <h2>Teste de H2</h2>

    function subtitulo(){
        return <h3>{"muito legal".toUpperCase()}</h3>
        
    }

    return(
        <Layout>
                <div>
                    <h1>JSX é um conceito Central</h1>
                    <p>
                        {JSON.stringify({obj})}
                    </p>
                    {tituloH2}
                    {subtitulo()}
                </div>
        </Layout>
    )
}

export default Inicio