const ProfileCard = () => {
    return (
        <div className="w-fit flex flex-col items-center max-w-full gap-3 scale-90">
            <div className="w-fit h-fit relative">
                <img
                    className=" h-fit rounded-[50%]  w-fit object-cover"
                    alt=""
                    src="/gt@2x.png"
                />
                <div className="absolute right-2 bottom-2 rounded-[50%] bg-yellowgreen box-border w-[15px] h-[15px] border-[3px] border-solid border-white" />
            </div>
            <div className="flex flex-col items-center justify-center ">
                <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-center space-x-2">
                        <div className="w-fit h-fit font-sm">
                            Welcome
                        </div>
                        <img
                            className="w-fit h-fit cursor-pointer"
                            loading="lazy"
                            alt=""
                            src="/icon-awesomeedit.svg"
                        />
                    </div>
                </div>
                <div className="font-semibold text-darkslateblue-200 min-w-fit">
                    Dr. Dandamudi
                </div>
                <div className="font-light text-sm">
                    Pre- Production Release Test
                </div>
                <div className="flex flex-row items-center justify-center space-x-2">
                    <div className="h-fit flex flex-col items-start justify-start box-border">
                        <img
                            className="w-fit h-fit"
                            loading="lazy"
                            alt=""
                            src="/icon-materiallocationon.svg"
                        />
                    </div>
                    <div className="min-w-fit text-xs">
                        Battle Creek PC (CST)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard