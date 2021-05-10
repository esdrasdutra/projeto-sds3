import axios from 'axios';
import { useEffect, useState } from 'react';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';
import Chart from 'react-apexcharts';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[],
    };
    series: SeriesData[];
}


const BarChart = () => {
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        }
    };

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories:[]
        },
        series:[{
            name:"",
            data:[]
        }]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/successBySeller`)
          .then(response => {
            const data = response.data as SaleSuccess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100 * x.deals / x.visited, 1));
    
            setChartData({
              labels: {
                categories: myLabels
              },
              series: [
                {
                  name: "Success %",
                  data: mySeries
                }
              ]
            });
          });
      }, []);
      
    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;