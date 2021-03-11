import * as React from "react"
import MenuItems from "./menuItems"
import ZoeyIcon from "../../images/Zoey.png" 


const Navbar = () => {
    return(
        <nav class="bg-gradient-to-tr from-purple-600 to-purple-800 border-b-2 border-purple-300 border-solid flex">
            <img src ={ZoeyIcon} alt="..." class="rounded-full border-4 border-purple-400 h-24 w-24 bg-gray-800 mx-4"/>
            <div class="flex-col self-center">
                <h1 class="text-3xl font-mono font-bold text-gray-100">Zoey Suzumiya</h1>
                <h2 class="text-xl text-gray-200">Graduate Software Developer</h2>
            </div>
            <ul class="flex-row mx-auto items-center hidden md:flex">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} class={item.cName}>
                            <input type="button" value= {item.title} href={item.url} class="transform translate-y-1 text-gray-100 text-xl rounded-lg border-2 border-purple-400 block bg-purple-600 ml-2 h-10 shadow-md px-2 cursor-pointer hover:border-purple-200 hover:translate-y-0 outline-none"/>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar

