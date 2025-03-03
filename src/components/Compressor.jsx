import React from 'react';
import { ArrowLeft, Plus, Minus } from "lucide-react";

const AirDryerForm = ({ onNext, onBack }) => {
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center">Air Dryer Information</h2>
            <p className="text-blue-500 text-sm text-center cursor-pointer">Where to find this information?</p>
            <form className="space-y-4 mt-4">
                <div>
                    <label className="block font-medium">Manufacturer</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="Type here" />
                </div>
                <div>
                    <label className="block font-medium">Date of manufacture</label>
                    <input type="date" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">Model</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="Type here" />
                </div>
                <div>
                    <label className="block font-medium">Serial No</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="Type here" />
                </div>
                <div>
                    <label className="block font-medium">Voltage rating</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="(V/min)" />
                </div>
                <div>
                    <label className="block font-medium">Pressure Dewpoint</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="Type here" />
                </div>
            </form>
        </div>
    );
};

const FilterForm = ({ onNext, onBack }) => {
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center">Filter Information</h2>
            <p className="text-blue-500 text-sm text-center cursor-pointer">Where to find this information?</p>
            <form className="space-y-4 mt-4">
                <div>
                    <label className="block font-medium">Filter type and model</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="Type here" />
                </div>
                <div>
                    <label className="block font-medium">Filter manufacturer</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="Type here" />
                </div>
                <div>
                    <label className="block font-medium">Filter pressure drop</label>
                    <div className="flex space-x-4">
                        <input type="text" className="border p-2 rounded w-1/2" placeholder="Initial" />
                        <select className="border p-2 rounded">
                            <option>bar</option>
                            <option>psi</option>
                        </select>
                    </div>
                    <div className="flex space-x-4 mt-2">
                        <input type="text" className="border p-2 rounded w-1/2" placeholder="Current" />
                        <select className="border p-2 rounded">
                            <option>bar</option>
                            <option>psi</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block font-medium">Filter element replacement date</label>
                    <input type="date" className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block font-medium">Filter location in the system</label>
                    <input type="text" className="w-full border p-2 rounded" placeholder="Before/after dryer, at..." />
                </div>
            </form>
        </div>
    );
};
const CompressorStep2 = () => {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="bg-white shadow-lg rounded-lg p-2   text-center ">
                {/* Continue Button */}
                <button className="bg-orange-500 text-white w-full py-2 rounded-lg text-lg font-semibold hover:bg-orange-600 my-6">
                    Continue
                </button>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 my-4">
                    <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100">
                        Add Compressor
                    </button>
                    <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100">
                        Edit / remove Compressor
                    </button>
                </div>

                {/* Navigation & Save */}
                <div className="text-orange-500 text-sm mb-6">
                    <button className="mr-4 hover:text-orange-700">Back</button>
                    <span className="hover:text-orange-700 cursor-pointer">Save & continue later</span>
                </div>
            </div>
        </div>
    )
}

const CompressorStep6 = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-lg rounded-lg p-2  text-center my-6">
                {/* Continue Button */}
                <button className="bg-orange-500 text-white w-full py-2 rounded-md text-lg font-semibold hover:bg-orange-600 mt-6">
                    Continue
                </button>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 my-4">
                    <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100">
                        Add Power Readings
                    </button>
                    <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100">
                        Edit Power readings
                    </button>
                </div>

                {/* Navigation & Save */}
                <div className="text-orange-500 text-sm my-6">
                    <button className="mr-4 hover:text-orange-700">Back</button>
                    <span className="hover:text-orange-700 cursor-pointer">Save & continue later</span>
                </div>
            </div>
        </div>
    )
}

const CompressorStep5 = () => {
    return (
        <div className="mb-4">
            {/* Compressor Selection */}
            <div className="grid grid-cols-1 gap-4 my-4">
                <div className="w-full max-w-sm">
                    <label className="block mb-2 text-sm font-bold">Select Compressor</label>
                    <select className="w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                        <option value="">Select Compressor</option>
                        <option value="compressor1">Compressor 1</option>
                        <option value="compressor2">Compressor 2</option>
                    </select>
                </div>
            </div>

            {/* Main Motor kW Rating */}
            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="w-full max-w-sm">
                    <label className="block mb-2 text-sm font-bold">
                        Main motor kW rating <span className="text-green-500">ⓘ</span>
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            className="w-16 bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            min="0"
                        />
                        <select className="bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                            <option value="kw">kW</option>
                            <option value="hp">HP</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Fan Motor kW Rating */}
            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="w-full max-w-sm">
                    <label className="block mb-2 text-sm font-bold">Fan motor kW rating</label>
                    <input
                        type="text"
                        className="w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Type here"
                    />
                </div>
            </div>

            {/* Power Factor */}
            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="w-full max-w-sm">
                    <label className="block mb-2 text-sm font-bold">Power factor</label>
                    <input
                        type="text"
                        className="w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Cos phi"
                    />
                </div>
            </div>

            {/* Main Motor Voltage Rating */}
            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="w-full max-w-sm">
                    <label className="block mb-2 text-sm font-bold">Main motor voltage rating</label>
                    <input
                        type="text"
                        className="w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Type here"
                    />
                </div>
            </div>

            {/* Main Motor Current Rating */}
            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="w-full max-w-sm">
                    <label className="block mb-2 text-sm font-bold">Main motor current rating</label>
                    <input
                        type="text"
                        className="w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Type here"
                    />
                </div>
            </div>


        </div>
    )
}
const CompressorStep4 = () => {
    return (
        <div className="mb-4">
            <div className="grid grid-cols-1 gap-4 my-4">
                <div class="w-full max-w-sm ">
                    <label class="block mb-2 text-sm text-bold">
                        Electrical cable size
                    </label>
                    <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here" />
                </div>

            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="form-item vertical">
                    <label className="form-label mb-4">Energy Saving (ES) control available?
                    </label>
                    <div className="flex gap-4 mt-4">
                        <label className="radio-label inline-flex">
                            <input
                                type="radio"
                                className="radio peer h-5 w-5 cursor-pointer rounded-full border border-slate-300 mx-2 "
                                name="propertyType"
                                value="Privée"
                                //   checked={newSite?.propertyType === "Privée"}
                                onChange={(e) => { }}
                            />
                            <span>Yes</span>
                        </label>
                        <label className="radio-label inline-flex">
                            <input
                                type="radio"
                                className="radio peer h-5 w-5 cursor-pointer rounded-full border border-slate-300 mx-2 "
                                name="propertyType"
                                value="Publique"
                                //   checked={newSite?.propertyType === "Publique"}
                                onChange={(e) => {

                                }}
                            />
                            <span>No</span>
                        </label>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="w-full max-w-sm">
                    <label className="block mb-2 text-sm font-bold">
                        Receiver volume <span className="text-green-500">ⓘ</span>
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            className="w-16 bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            min="0"
                        />
                        <select className="bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                            <option value="liters">Liters</option>
                            <option value="cubicMeters">Cubic meters</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="w-full max-w-sm">
                    <label className="block mb-2 text-sm font-bold">
                        Pipe size <span className="text-green-500">ⓘ</span>
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            className="w-16 bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            min="0"
                        />
                        <select className="bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-2 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                            <option value="inches">Inches</option>
                            <option value="millimeters">Millimeters</option>
                        </select>
                    </div>
                </div>
            </div>


        </div>
    )
}

const CompressorStep3 = () => {
    return (
        <div className="mb-4">
            <div className="grid grid-cols-1 gap-4 my-4">
                <div className="w-full max-w-sm">
                    <label className="block text-sm">Total Running Hours</label>
                    <div className="flex items-center my-4">
                        <button className="px-3 py-1 border bg-gray-500 rounded">
                            <Minus size={18} className="text-white" />
                        </button>
                        <input type="number" className="mx-4 w-24 text-center border" />
                        <button className="px-3 py-1 border bg-blue-700 ">
                            <Plus size={18} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 my-4">
                <div className="w-full max-w-sm">
                    <label className="block text-sm">Loaded Hours</label>
                    <div className="flex items-center my-4">
                        <button className="px-3 py-1 border bg-gray-500 rounded">
                            <Minus size={18} className="text-white" />
                        </button>
                        <input type="number" className="mx-4 w-24 text-center border" />
                        <button className="px-3 py-1 border bg-blue-700 ">
                            <Plus size={18} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 my-4">
                <div className="w-full max-w-sm">
                    <label className="block text-sm">Module Hours</label>
                    <div className="flex items-center my-4">
                        <button className="px-3 py-1 border bg-gray-500 rounded">
                            <Minus size={18} className="text-white" />
                        </button>
                        <input type="number" className="mx-4 w-24 text-center border" />
                        <button className="px-3 py-1 border bg-blue-700 ">
                            <Plus size={18} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 my-4">
                <div className="w-full max-w-sm">
                    <label className="block text-sm">Motor Starts</label>
                    <div className="flex items-center my-4">
                        <button className="px-3 py-1 border bg-gray-500 rounded">
                            <Minus size={18} className="text-white" />
                        </button>
                        <input type="number" className="mx-4 w-24 text-center border" />
                        <button className="px-3 py-1 border bg-blue-700 ">
                            <Plus size={18} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const CompressorStep1 = () => {
    return (<div className="mb-4">
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div class="w-full max-w-sm ">
                <label class="block mb-2 text-sm text-bold">
                    Compressor N°
                </label>
                <input type="number" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div class="w-full max-w-sm ">
                <label class="block mb-2 text-sm text-bold">
                    Manufacturer
                </label>
                <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div class="w-full max-w-sm ">
                <label class="block mb-2 text-sm text-bold">
                    Model
                </label>
                <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div class="w-full max-w-sm ">
                <label class="block mb-2 text-sm text-bold">
                    Serial No
                </label>
                <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div class="w-full max-w-sm ">
                <label class="block mb-2 text-sm text-bold">
                    Free to Air delivery(FAD)
                </label>
                <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div class="w-full max-w-sm ">
                <label class="block mb-2 text-sm text-bold">
                    Main Motor
                </label>
                <input type="text" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here" />
            </div>
        </div>
    </div>)
}

const CompressorStep9 = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-lg rounded-lg p-2  text-center my-6">
                {/* Continue Button */}
                <button className="bg-orange-500 text-white w-full py-2 rounded-md text-lg font-semibold hover:bg-orange-600 mt-6">
                    Continue
                </button>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 my-4">
                    <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100">
                        Add Air Dryer Information
                    </button>
                    <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100">
                        Edit/remove Air Dryer Information
                    </button>
                </div>
                <div className="flex justify-center gap-4 my-4">
                    <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100">
                        Add Filter Information
                    </button>
                    <button className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-100">
                        Edit/remove Filter Information
                    </button>
                </div>

                {/* Navigation & Save */}
                <div className="text-orange-500 text-sm my-6">
                    <button className="mr-4 hover:text-orange-700">Back</button>
                    <span className="hover:text-orange-700 cursor-pointer">Save & continue later</span>
                </div>
            </div>
        </div>
    )
}

const CompressorStep10 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-blue-500 aspect-square">
                        <span className="text-xl font-bold">0%</span>
                    </div>
                </div>
                <p className="text-lg mb-6">Great job!!</p>
                <p className="text-lg mb-6">You are halfway through.</p>
                <p className="text-lg mb-8">Now let's check how air moves through the facility.</p>

                <div className="flex justify-between">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Back
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Continue
                    </button>
                </div>

                <button className="mt-6 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 w-full">
                    I will finish later!
                </button>
            </div>
        </div>
    );
};


const CompressorStep11 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                {/* Question 1 */}
                <div className="mb-6 text-left">
                    <p className="text-lg mb-2">1. Do you have a schedule for checking and repairing air leaks?</p>
                    <input
                        type="text"
                        placeholder="If yes, how often?"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Question 2 */}
                <div className="mb-6 text-left">
                    <p className="text-lg mb-2">2. What is the pipes size?</p>
                    <input
                        type="text"
                        placeholder="Enter pipe size"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Question 3 */}
                <div className="mb-6 text-left">
                    <p className="text-lg mb-2">3. Do you notice any pressure drops in the system?</p>
                    <input
                        type="text"
                        placeholder="If yes, specify where it happens"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Navigation Buttons */}

            </div>
        </div>
    );
};

const CompressorStep12 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <div className="text-left">
                    <p className="text-lg mb-4">1. What are the main machines or processes using compressed air?</p>
                    <table className="w-full mb-6">
                        <tbody>
                            <tr>
                                <td className="border p-2">spray painting +</td>
                                <td className="border p-2"></td>
                            </tr>
                            <tr>
                                <td className="border p-2">Pneumatic tools +</td>
                                <td className="border p-2">air motors + cleaning +</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="text-lg mb-4">2. Are there any small tools or devices that use compressed air?</p>
                    <table className="w-full mb-6">
                        <tbody>
                            <tr>
                                <td className="border p-2">Small air tools +</td>
                                <td className="border p-2"></td>
                            </tr>
                            <tr>
                                <td className="border p-2">Air blowers +</td>
                                <td className="border p-2">Pressure regulators +</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="text-lg mb-4">3. What are your working hours for the compressed air system?</p>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};
const CompressorStep13 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <p className="text-lg mb-6">It is time for visual check. You can save & continue later or finish now</p>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};
const CompressorStep14 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <div className="text-left">
                    <p className="text-lg mb-4">1. Do you hear any air escaping from pipes or connections when no equipment is running?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Are there visible leaks or worn-out hoses, seals, or fittings?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Is compressed air being used for cleaning instead of more efficient alternatives (e.g vacuum or blowers)?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};
const CompressorStep15 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">

                <div className="text-left">
                    <p className="text-lg mb-4">1. Is the system running at a higher pressure than necessary?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Do operators increase pressure to compensate for pressure drops?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Are pressure regulators installed and set correctly for different tools/machines?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};

const CompressorStep16 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <div className="text-left">
                    <p className="text-lg mb-4">1. Are filters regularly cleaned and replaced to avoid clogging?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Are drain traps functioning properly to remove water from the system?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Is the air dryer working correctly to prevent moisture-related inefficiencies?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};


const CompressorStep17 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">

                <div className="text-left">
                    <p className="text-lg mb-4">1. Are compressors running when production is off (during breaks, weekends, etc.)?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Are multiple compressors running when only one is needed?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Are start/stop controls or timers in use to turn off compressors when not needed?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};
const CompressorStep19 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Compressor-018</h1>
                <h2 className="text-xl font-semibold mb-6">Audit - Compressed Air System</h2>
                <h3 className="text-lg font-semibold mb-6">6. Lack of Energy Awareness Among Operators</h3>

                <div className="text-left">
                    <p className="text-lg mb-4">1. Are employees trained on best practices for using compressed air efficiently?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Do operators leave compressed air tools running when not in use?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Are energy-saving guidelines displayed near workstations?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};

const CompressorStep18 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">


                <div className="text-left">
                    <p className="text-lg mb-4">1. Are there too many sharp bends and long piping distances?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Are pipes too small for the air demand, causing bottlenecks?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Are hoses, fittings, and connectors sized correctly for the system?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};

const CompressorStep20 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Compressor-019</h1>
                <h2 className="text-xl font-semibold mb-6">Audit - Compressed Air System</h2>
                <h3 className="text-lg font-semibold mb-6">7. Inefficient Use of End-Use Equipment</h3>

                <div className="text-left">
                    <p className="text-lg mb-4">1. Are there idle machines consuming compressed air when not in use?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Is compressed air being used for cooling when alternative methods are available?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Are pneumatic cylinders or actuators leaking or slow in operation?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};

const CompressorStep21 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Compressor-020</h1>
                <h2 className="text-xl font-semibold mb-6">Audit - Compressed Air System</h2>
                <h3 className="text-lg font-semibold mb-6">8. Cleaning Practices with Compressed Air</h3>

                <div className="text-left">
                    <p className="text-lg mb-4">1. Is compressed air used to clean clothes or remove dust from surfaces when other methods (e.g. vacuum cleaners, brushes or blowers) could do the job?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Is compressed air used to clean tools, equipment, machinery instead of a dedicated cleaning system (vacuum cleaners, brush, etc)?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Is compressed air used to blow debris or dirt off floors, walls, or equipment when a broom or vacuum could be more efficient?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};
const CompressorStep22 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Compressor-021</h1>
                <h2 className="text-xl font-semibold mb-6">Audit - Compressed Air System</h2>
                <h3 className="text-lg font-semibold mb-6">9. Use of Open Hoses or Air Guns</h3>

                <div className="text-left">
                    <p className="text-lg mb-4">1. Are open hoses used to blow air for cleaning purposes?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q1" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q1" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">2. Are air guns used without a nozzle or with an oversized nozzle, which can lead to excess airflow?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q2" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q2" value="No" /> No</label>
                    </div>

                    <p className="text-lg mb-4">3. Are the air guns being left running when not in use, leading to unnecessary air consumption?</p>
                    <div className="flex space-x-4 mb-6">
                        <label><input type="radio" name="q3" value="Yes" /> Yes</label>
                        <label><input type="radio" name="q3" value="No" /> No</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
            </div>
        </div>
    );
};
const CompressorStep23 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">


                <div className="text-left">
                    <p className="text-lg mb-4">Pipe Size for Cleaning (if applicable):</p>
                    <input
                        type="text"
                        placeholder="Enter pipe size"
                        className="w-full p-2 border border-gray-300 rounded mb-6"
                    />

                    <p className="text-lg mb-4">Types of Air Guns Used:</p>
                    <input
                        type="text"
                        placeholder="Enter types of air guns"
                        className="w-full p-2 border border-gray-300 rounded mb-6"
                    />

                    <p className="text-lg mb-4">Duration of Cleaning Activities:</p>
                    <input
                        type="text"
                        placeholder="Enter duration"
                        className="w-full p-2 border border-gray-300 rounded mb-6"
                    />
                </div>

                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>

                <button className="mt-6 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 w-full">
                    Save & continue later
                </button>
            </div>
        </div>
    );
};
const CompressorStep24 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <div className="flex justify-between mt-8">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Back</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Complete</button>
                </div>
            </div>
        </div>
    );
};


export {
    AirDryerForm, FilterForm, CompressorStep6, CompressorStep5,
    CompressorStep4, CompressorStep3, CompressorStep2, CompressorStep1,
    CompressorStep9, CompressorStep10, CompressorStep11, CompressorStep12,
    CompressorStep13, CompressorStep14, CompressorStep15, CompressorStep16,
    CompressorStep17, CompressorStep19, CompressorStep18, CompressorStep20,
    CompressorStep21, CompressorStep22, CompressorStep23, CompressorStep24
};
