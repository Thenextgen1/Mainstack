import { useState, useEffect } from "react";
import { useQuery } from "react-query";
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
import LineChart from "./LineChart";
import Doughnuts from "./Doughnuts";

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


interface graphData {
    data: {
        graph_data: { views: {} };
        top_locations: [
            {
                country: string,
                percent: string
            }
        ],
        top_sources: [{
            source: string,
            percent: string
        }]
    }
}

export interface Istate {
    sources: [
        {
            source: string,
            percent: string
        }
    ],
    location: [
        {
            country: string,
            percent: string
        }
    ]
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



const Charts = (): JSX.Element => {
    const [chartData, setChartData] = useState<graphData["data"]>({

        graph_data: { views: {} },
        top_locations: [{ country: '', percent: '' }],
        top_sources: [{ source: '', percent: '' }],

    });
    const getChartData = async () => {
        const res = await fetch('http://test.api.mainstack.io/');
        return res.json();
    };
    const { data, error, isLoading, status } = useQuery('randomFacts', getChartData);
    const [lineChart, setLineChart] = useState({});
    const [location, setLocation] = useState<Istate["location"]>([
        {
            percent: '',
            country: ''
        }
    ]);
    const [sources, setSources] = useState<Istate["sources"]>([
        {
            source: '',
            percent: ''
        }
    ]);

    useEffect(() => {
        if (status === 'success' && typeof chartData === 'object') {
            setChartData(data);
            setLineChart(chartData?.graph_data?.views);
            setLocation(chartData?.top_locations);
            setSources(chartData?.top_sources)
        }

    }, [status, data, chartData]);

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;

    console.log(location, sources)

    return (
        <section>

            <LineChart lineChart={lineChart} />
            <Doughnuts location={location} sources={sources} />
        </section>
    )
}

export default Charts