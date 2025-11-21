import PillNav from './PillNav'; 
import Logo from '../../public/logo/hive-blockchain-svgrepo-com (1).svg'

function Header(){
    return(
        <PillNav
            logo={Logo}
            logoAlt="Company Logo"
            items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' }
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
        />
    )
}

export default Header;
