
import Dashboard from "pages/Dashboard";
function HomePage() {

    return (
        <>
            <div className="container-fluid text-center">
                <h1>VOCÊ</h1>
                <h1 className="text-warning"> PRECISA</h1>
                <h1>ACOMPANHAR</h1>
                <h1 className="text-danger">O DESEMPENHO DE</h1>
                <h1>SUA EQUIPE DE VENDAS</h1>
                <h1 className="font-weight-bold">!?</h1>

                <div>
                    <button
                        type="button"
                        className="btn btn-lg btn-info"
                        style={{ fontSize: "40px" }}>
                        CONHEÇA O DS VENDAS
                        </button>
                </div>
            </div>

        </>
    );
}
export default HomePage;