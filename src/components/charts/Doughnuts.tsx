import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Istate as Iprops } from './Charts';


ChartJS.register(ArcElement, Tooltip, Legend);


const Doughnuts: React.FC<Iprops> = ({ sources, location }) => {

    const locationData = {
        labels: location.map((value) => value.country),
        datasets: [
            {
                label: '# of Votes',
                data: location.map((value) => value.percent),
                backgroundColor: [
                    '#599EEA',
                    '#844FF6',
                    '#0FB77A',
                    '#FAB70A',
                    '#F09468',
                ],
                borderColor: [
                    '#599EEA',
                    '#844FF6',
                    '#0FB77A',
                    '#FAB70A',
                    '#F09468',

                ],
                borderWidth: 1,
            },
        ],
    };

    const sourcesData = {
        labels: sources.map((value) => value.source),
        datasets: [
            {
                label: '# of Votes',
                data: sources.map((value) => value.percent),
                backgroundColor: [
                    '#599EEA',
                    '#844FF6',
                    '#0FB77A',
                    '#FAB70A',
                    '#F09468',
                ],
                borderColor: [
                    '#599EEA',
                    '#844FF6',
                    '#0FB77A',
                    '#FAB70A',
                    '#F09468',

                ],
                borderWidth: 1,
            },
        ],
    }


    return (
        <div><Doughnut data={locationData} />
            <Doughnut data={sourcesData} />
        </div>
    )
}

export default Doughnuts