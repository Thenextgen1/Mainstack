import useDesktop from "../hooks/desktop";
import { MobileMenu, DesktopMenu } from "../layout";

const DashboardNav = () => {
    return (
        <header>
            {useDesktop() >= 1180 ? <DesktopMenu /> : <MobileMenu />}
        </header>
    )
}

export default DashboardNav