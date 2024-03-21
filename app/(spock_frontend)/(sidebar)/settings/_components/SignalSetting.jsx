import Link from "next/link";
import Slider from "./Slider";

const items = [
    'Enable Alerts',
    'Enable Automation',
    'Enable Customization',
]

const SignalSetting = () => {
    return (
        <div>
            <div className="scale-90 text-sm font-poppins w-[20vw] my-3">
                <div className="rounded-xl bg-darkslateblue-100 w-full h-fit flex flex-col  justify-center  gap-5 py-5 px-4" >
                    <div className="flex flex-row space-x-6 mr-3">
                        <img
                            className="w-[18px] h-[18px] m-1"
                            alt=""
                            src="/info.svg"
                        />
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex justify-between items-center space-x-5">
                                <div className="">
                                    <div className="text-white cursor-pointer no-underline text-md">
                                        Signal Settings
                                    </div>
                                </div>
                            </div>
                            {
                                items.map((item) => {
                                    return (
                                        <div className="flex justify-between items-center space-x-5">
                                            <div className="">
                                                <div className="text-white cursor-pointer no-underline">
                                                    {item}
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center" >
                                                <Slider />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignalSetting