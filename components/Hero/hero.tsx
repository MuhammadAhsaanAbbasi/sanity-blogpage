import { HiOutlineMenuAlt3 } from "react-icons/hi"


const Hero = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row lg:space-x-5 justify-around items-center py-5 mb-10">
            <div className="flex justify-around flex-col gap-y-2">
            <h1 className="text-6xl font-bold text-black">Abbasi Daily Blog</h1>
            <h3 className="text-xl font-medium text-slate-500">
                Welcome to{" "}
                <span>
                    Every Developers
                </span>{" "}
                favourite Blog in the Devosphere
            </h3>
            </div>
            <p className="text-lg font-normal text-zinc-500 mt-5 md:mt-2 max-w-sm lg:max-w-md">
                New Product Features | The Latest Technology | The weekely Debugging 
                nightmares & more!
            </p>
        </div>
        </>
    )
}

export default Hero