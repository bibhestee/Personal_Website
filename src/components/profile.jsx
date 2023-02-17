import About from "./about"
import {lg_pic, sm_pic} from "../assets"

export const Profile = () => {
    return (
        <div id="profile" className="flex align-center sm:flex-row sm:pl-7 mt-10 sm:relative sm:mx-auto px-4">
            <div className="flex flex-wrap sm:flex-col sm:z-10">
                <h5 className="font-robo_mono font-medium text-[36px] ">Hello,</h5>
                <h1 className="font-inco font-normal text-[36px] md:text-[38px] sm:text-[42px]">I'M</h1>
                
                <h1 className='font-inco font-xl text-[38px] md:text-[64px] bg-gradient-to-r from-[#f937d3] to-[#00d4ff] text-transparent bg-clip-text'>ABDULLAHI ABDULBASIT</h1>
                <img src={sm_pic} className="md:hidden rounded-full h-[200px] sm:w-[200px]" />
                <About />
            </div>
            <div className="hidden sm:block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-[230px] h-[50px] absolute left-[-55px] top-[3px] z-[-4px]"/>
            <img src={lg_pic} alt="profile_pic" className="hidden md:block sm:w-100% w-auto sm:h-auto h-[300px] absolute right-[8%] top-[-10%]"/>
        </div>
    )
}