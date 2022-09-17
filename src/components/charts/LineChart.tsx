import {
    Chart as ChartJS,
    CategoryScale,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import 'chartjs-adapter-moment'
import { Line } from 'react-chartjs-2';




ChartJS.register(
    CategoryScale,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
interface Props {
    lineChart: object
}


export const options = {
    layout: {
        padding: 20
    },
    scales: {
        x: {
            type: 'time',
            time: {
                unit: 'day'
            },
            grid: {
                display: false
            }

        },
        y: {
            ticks: {
                stepSize: 10
            },

        }
    },
    color: '#4D5760',
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Fuel Usage',
        },
    },
    maintainAspectRatio: false

};


const LineChart = ({ lineChart }: Props) => {

    let lineDate: undefined | string[];
    let lineValues: undefined | string[];




    function setKeys() {
        if (typeof lineChart === 'object') {
            lineValues = Object.keys(lineChart);
            lineDate = Object.values(lineChart);
        }
    }
    setKeys();

    const lineChartData = {
        labels: lineValues?.map((value: string) => value),
        datasets: [
            {
                label: 'Fuel Usage',
                data: lineDate?.map((value: string) => value),
                borderColor: '#FF5403',
                backgroundColor: '#FF5403',
            }
        ]
    }




    return (
        <div className="w-[100%] h-[80vh] relative">
            <Line type="line" options={options} data={lineChartData} />
        </div>
    )
}

export default LineChart