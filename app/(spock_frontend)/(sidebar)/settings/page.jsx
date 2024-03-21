"use client";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "./_components/Slider";
import NotesComp from "./_components/NotesComp";
import SignalSetting from "./_components/SignalSetting";
import Select from "react-select";

const page = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handler function for when an option is selected or deselected
  const handleCategoryChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map(option => option.value);
    setSelectedValues(selectedValues);
  };

  return (
    <div className="w-fit m-5 rounded-lg font-poppins bg-slate-50">
      <div className="flex justify-start w-[92vw] h-16 space-x-96 bg-aliceblue items-center">
        <Link className="ml-4 flex  items-center no-underline" href={"/"}>
          <MdKeyboardArrowLeft className="text-blue-600" />
          <div className=" text-blue-600 ml-1">Back</div>
        </Link>
        <div className="px-36 font-bold">Settings</div>
      </div>

      <div className="h-[72vh] overflow-y-auto mx-14 my-3 py-5 flex justify-between">
        <div>
          {/* Branding Logo */}
          <div className="mb-3">
            <div className="font-bold my-3">Branding Logo</div>
            <div className="flex justify-start space-x-3 my-5">
              <img src="brand_setting.svg" alt="" className="h-24" />
              <div className="text-xs items-center flex">
                (Max Size is 300 Px Wide and 1000 Px tall )
              </div>
            </div>
            <div className="w-96 text-sm">
              <p>
                Please upload your logo in png or jpg format on a white or
                transparent background
              </p>
            </div>
          </div>
          {/* Delivery Status */}
          <div className="my-5">
            <div className="flex justify-between w-52 items-center h-10">
              <div className="font-bold">Delivery Status</div>
              <div>
                {" "}
                <Slider />
              </div>
            </div>
            <p className="mt-0 text-sm">
              If enabled you will see the delivery status of channel messages.
            </p>
          </div>
          {/* SMS Delivery Status */}
          <div className="my-5">
            <div className="font-bold">
              SMS Delivery failure triggers patient channel to reopen
            </div>
            <p className="text-sm">
              When enabled , a patient will reopen for an SMS message delivery
              failure
            </p>
            <div className="flex justify-between items-center h-10 w-96">
              <div>
                <Slider />
              </div>
              <p className="text-sm">Open Channel for failed SMS Message</p>
            </div>
          </div>
          {/* Patient Sign In Security */}
          <div className="my-5">
            <div className="font-bold">Patient Sign In Security</div>
            <p className="text-sm">
              Patients will have to verify these PHI fields before they can
              login
            </p>
            <div>
            <Select
              isMulti
              name="PHI Data"
              className="text-xs w-11/12"
              value={selectedValues.map(value => ({ value, label: value }))}
              options={[
                { value: "Date of Birth", label: "Date of Birth" },
                { value: "Phone Number", label: "Phone Number" },
              ]}
              onChange={handleCategoryChange}
              closeMenuOnSelect={false}
              // defaultValue={securityfields ? securityfields.map(value => ({ value, label: value })) : []}
            />
            </div>
          </div>
          {/* SMS Notification to mail */}
          <div className="my-5">
            <div className="flex justify-between h-10 w-96">
              <div className="font-bold">Trigger SMS Notification to Email</div>
              <div>
                {" "}
                <Slider />
              </div>
            </div>
            <p className="text-sm mt-0">
              If enabled you will see the SMS Notification to Email
            </p>
          </div>
          {/* Trigger Secure Message */}
          <div>
            <div className="flex justify-between h-10 w-10/12">
              <div className="font-bold">
                Trigger Secure Message Email to Provider
              </div>
              <div>
                <Slider />
              </div>
            </div>
            <p className="text-sm mt-0">Add Provider's Email ID</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="someone@abc.com"
              className="mx-auto mb-2 h-10 w-[30vw] px-5 outline-none font-poppins rounded  border-solid border-[1px] border-x-gray-300"
            />
          </div>
        </div>
        <div className="mr-10">
          <div className="flex flex-col justify-end items-end">
            <NotesComp />
            <SignalSetting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
