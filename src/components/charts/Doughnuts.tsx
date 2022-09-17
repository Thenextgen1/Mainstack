import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Istate as Iprops } from './Charts';
import '../../styles/doughnuts.css'


ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
    plugins: {
        legend: {
            display: false,
        },

    },
}


const Doughnuts: React.FC<Iprops> = ({ sources, location }) => {

    const locationData = {
        labels: location.map((value) => value.country),
        datasets: [
            {
                label: '# of Votes',
                data: location.map((value) => value.count),
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
                data: sources.map((value) => value.count),
                backgroundColor: [
                    '#599EEA',
                    '#844FF6',
                    '#0FB77A',
                    '#FAB70A',
                ],
                borderColor: [
                    '#599EEA',
                    '#844FF6',
                    '#0FB77A',
                    '#FAB70A',

                ],
                borderWidth: 1,
            },
        ],
    }


    return (
        <section className='lg:flex justify-between'>
            <div className='border-solid border border-[#EFF1F6] rounded-xl my-4 p-6 mr-4 flex-1'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-mainstackBlack font-bold text-lg'>Top Locations</h4>
                    <p className='text-mainstackOrange text-sm'>View full reports</p>
                </div>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between mt-4'>
                    <ul className='location_container'>
                        {location.map((place, i) => (
                            <li className='py-2 text-mainstackBlack font-medium' key={i}>{place.country} {place.percent}%</li>
                        ))}
                    </ul>
                    <div className='max-w-[160.56px] w-[40vw] mt-4'><Doughnut data={locationData} options={options} /></div>
                </div>
            </div>
            <div className='border-solid border border-[#EFF1F6] rounded-xl my-4 p-6 flex-1'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-mainstackBlack font-bold text-lg'>Top Referral Source</h4>
                    <p className='text-mainstackOrange text-sm'>View full reports</p>
                </div>
                <div className='flex flex-col justify-between sm:flex-row sm:items-center mt-4'>
                    <ul className='sources_container'>
                        {sources.map((ref, i) => (
                            <li className='py-2 text-mainstackBlack font-medium' key={i}>{ref.source} {ref.percent}%</li>
                        ))}
                    </ul>
                    <div className='max-w-[160.56px] w-[40vw] mt-4'>
                        <Doughnut data={sourcesData} options={options} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doughnuts