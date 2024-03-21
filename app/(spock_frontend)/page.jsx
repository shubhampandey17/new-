"use client"
import { useRouter } from 'next/navigation'
import ProfileCard from "./_components/ProfileCard";



export default function Home() {
  const router = useRouter();

  const handleChatsClick = () => {
    router.push('/chats');
  };
  const handleCampaignClick = () => {
    router.push('/campaign')
  };
  const handleApointmentClick = () => {
    router.push('/appointment');
  };

  const handleReportsClick = () => {
    router.push('/reports');
  };

  const handleFormsClick = () => {
    router.push('/forms');
  };

  const handleAutomationClick = () => {
    router.push('/automation');
  };

  return (
    <div className="w-fit m-5 rounded font-poppins bg-aliceblue overflow-auto">
      <div className="flex flex-col items-center w-[92vw] h-[85vh] gap-3 ">
        <ProfileCard />
        <div className="flex justify-center items-center scale-90 mb-2">
          <div className="grid grid-cols-3 gap-16">
            {/* chats */}
            <div className="bg-orange-200 p-4 flex flex-col justify-center items-center gap-3 w-64 rounded-xl" >
              <div className="bg-white p-3 rounded-full">
                <img
                  className="w-[60px] h-[60px] object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/chat-1@2x.png"
                  onClick={handleChatsClick}
                />
              </div>
              <p className="">
                Chats
              </p>
            </div>
            {/* campaign */}
            <div className="bg-pink p-4 flex flex-col justify-center items-center gap-3 w-64 rounded-xl" >
              <div className="bg-white p-3 rounded-full">
                <img
                  className="w-[60px] h-[60px] object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/socialmediamarketing@2x.png"
                  onClick={handleCampaignClick}
                />
              </div>
              <p className="">
                Create Campaign
              </p>
            </div>
            {/* appointment automation */}
            <div className="bg-silver p-4 flex flex-col justify-center items-center gap-3 w-64 rounded-xl" >
              <div className="bg-white p-3 rounded-full">
                <img
                  className="w-[60px] h-[60px] object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/appointment-automation-icon.svg"
                  onClick={handleApointmentClick}
                />
              </div>
              <p className="">
              Appointment Automation
              </p>
            </div>
            {/* report */}
            <div className="bg-[#AABAD3] p-4 flex flex-col justify-center items-center gap-3 w-64 rounded-xl" >
              <div className="rounded-full">
                <img
                  className="w-[80px] h-[80px] object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="report-icon.svg"
                  onClick={handleReportsClick}
                />
              </div>
              <p className="">
                Reports
              </p>
            </div>
            <div className="bg-[#C6C6C5] p-4 flex flex-col justify-center items-center gap-3 w-64 rounded-xl" >
              <div className="rounded-full">
                <img
                  className="w-[80px] h-[80px] object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/forms-icon.svg"
                  onClick={handleFormsClick}
                />
              </div>
              <p className="">
                Forms
              </p>
            </div>
            <div className="bg-orange-200 p-4 flex flex-col justify-center items-center gap-3 w-64 rounded-xl" >
              <div className="bg-white p-3 rounded-full">
                <img
                  className="w-[63px] h-[63px] object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/automation-icon.svg"
                  onClick={handleAutomationClick}
                />
              </div>
              <p className="">
                Automation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

