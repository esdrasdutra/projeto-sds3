import React from 'react';

import DataTable from 'components/DataTable';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutsChart';

export default class Dashboard extends React.Component<IDashboardProps, IDashboardState>{
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row px-6">
            <div className="col-6">
              <h1 className="texto-primary">Dashboard de Vendas</h1>
            </div>         
          </div>

          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-success">Taxa de Sucesso</h5>
              <DonutChart />
            </div>

            <div className="py-3">
              <h2 className="texto-primary"> Todas as Vendas</h2>
            </div>

          </div>
          <DataTable />
        </div>
      </>
    );
  }
}

interface IDashboardProps {

}

interface IDashboardState {
}