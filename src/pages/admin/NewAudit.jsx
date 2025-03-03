import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import maisonPompe from "../../assets/maisonpompe.jpeg"
const NewAudit = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 bg-[#E8F5E9] min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg  text-center">
                {/* Title */}
                <h1 className="text-xl font-semibold text-gray-800 p-10">
                    Track, Monitor, Optimize: Your{" "}
                    <span className="text-orange-500 font-bold">Energy <br /> Journey</span>. Starts Here
                </h1>

                {/* Image Section */}
                <div
                    className="
                    w-full max-w-[920px] h-auto p-6 sm:p-10 md:p-12 flex flex-col items-center gap-6 sm:gap-10"
                >
                    <img
                        src={maisonPompe} // Update with the correct image path
                        alt="Green Energy House"
                        className="bg-gray-800 p-2  w-full max-w-[862px]"
                    />
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <button
                        className="flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft size={16} /> Go Back
                    </button>
                    <button
                        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
                        onClick={() => navigate("/admin/audit/checklist")}
                    >
                        Begin Audit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewAudit;
