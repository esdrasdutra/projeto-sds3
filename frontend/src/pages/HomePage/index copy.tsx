import React from "react";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component<IHomePageProps, IHompePageState> {

    constructor(props: IHomePageProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid text-center">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h1>VOCÊ</h1>
                        <h1 className="text-warning"> PRECISA</h1>
                        <h1>ACOMPANHAR</h1>
                        <h1 className="text-danger">O DESEMPENHO DE</h1>
                        <h1>SUA EQUIPE</h1>
                        <h1 className="font-weight-bold">!?</h1>
                    </div>
                    <div className="col-6 ">
                        <Link to="/dashboard"><button
                            type="button"
                            className="btn btn-lg btn-success"
                            style={{ fontSize: "40px" }}>
                            CONHEÇA O DS VENDAS
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>

            </div>
        );
    }
}

interface IHomePageProps {

}

interface IHompePageState {

}