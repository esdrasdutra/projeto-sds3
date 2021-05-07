import DataTable from 'components/DataTable';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutsChart';

function Dashboard() {
  return (
    <>
      <div className="container">
        <h1 className="texto-primary py-3">Dashboard de Vendas</h1>
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
export default Dashboard;