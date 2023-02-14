const NavLink = (props) => {
    return (
        <a href={props.to} className="text-black m-2 m-3 hover:underline">
            {props.children}
        </a>
    )
}

const Header = () => {
    return (
        <div className="flex items-center justify-center md:container md:mx-auto bg-white h-18 p-3 drop-shadow-md">
            <div className="w-2/4">ABDULLAHI ABDULBASIT</div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="#profile">Profile</NavLink>
                <NavLink to="#portfolio">Portfolio</NavLink>
                <button className="border-solid border-2 rounded-2xl border-blue-400 px-2 py-1 ml-2">Contact</button>
            </div>
        </div>
    )
}

export default Header