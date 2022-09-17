import { Charts } from '../components'
import '../styles/home.css'

const Home = () => {
    return (
        <main className="px-6 mt-3 pb-12 lg:px-16 main">
            <section>
                <h2 className="text-xl lg:text-2xl text-mainstackBlack font-bold tracking-[-0.015em]">Good morning, Blessing ⛅️</h2>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-mainstackGray my-2">Check out your dashboard <span className="hidden lg:inline">summary</span></p>
                    <p className="text-sm text-mainstackOrange">View Analytics</p>
                </div>
                <ul className="text-sm font-Soehnebuch grid grid-cols-3 items-center lg:flex my-4 time_filter text-mainstackGray gap-3">
                    <li>1 Day</li>
                    <li>3 Days</li>
                    <li>7 Days</li>
                    <li>30 Days</li>
                    <li>All Time</li>
                    <li>Custom Date</li>
                </ul>
            </section>

            <Charts />
        </main>
    )
}

export default Home