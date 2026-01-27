import './SocialSidebar.css'

const SocialSidebar = () => {
    const socials = [
        { name: 'GITHUB', href: 'https://github.com/johndogmoc' },
        { name: 'LINKEDIN', href: 'https://linkedin.com/in/johndogmoc' },
        { name: 'TWITTER', href: 'https://twitter.com/johndogmoc' },
        { name: 'CODEPEN', href: 'https://codepen.io/johndogmoc' },
    ]

    return (
        <div className="social-sidebar">
            <div className="social-sidebar-divider"></div>
            <div className="social-sidebar-links">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        className="social-sidebar-link"
                    >
                        {social.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SocialSidebar
