import useDesktop from "../hooks/desktop";
import { MobileMenu, DesktopMenu } from "../layout";

const DashboardNav = () => {
    return (
        <header>
            {useDesktop() >= 1024 ? <DesktopMenu /> : <MobileMenu />}
        </header>
    )
}

export default DashboardNav