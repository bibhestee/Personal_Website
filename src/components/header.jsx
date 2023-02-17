const NavLink = ({ to, children}) => {
    return (
        <a href={to} className="font-inco text-black mx-4 hover:underline hover:text-lightBlue">
            { children}
        </a>
    )
}

const Header = () => {
    return (
        <div className="flex flex-col sm:flex-row w-full items-center justify-center bg-white h-18 p-3 drop-shadow-md mb-6 overflow-hidden">
            <div className="w-full text-center sm:text-start sm:w-2/4 text-xl mb-[10px] sm:pb-0 font-cursive">ABDULLAHI ABDULBASIT</div>
            <hr className="bg-lightBlue h-[2px] w-full mb-[10px] sm:hidden"></hr>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="#profile">Profile</NavLink>
                <NavLink to="#portfolio">Portfolio</NavLink>
                <button className="font-inco border-solid border-2 rounded-2xl border-lightBlue px-2 py-1 ml-2">Contact</button>
            </div>
        </div>
    )
}

export default Header