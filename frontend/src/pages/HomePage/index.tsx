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
            <div className="container">
            <div className="jumbotron" style={{backgroundColor:"white"}}>
              <h1 className="display-4">DSVendas</h1>
              <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
              <hr />
              <p>Nesta aplicação você pode acessar um dashboard a partir de dados fornecidos por um backend construído com Spring Boot.</p>
              <Link className="btn btn-primary btn-lg" to="/dashboard">
                Acessar o dashboard
              </Link>
            </div>
          </div>
        );
    }
}

interface IHomePageProps {

}

interface IHompePageState {

}