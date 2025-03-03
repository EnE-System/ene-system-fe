import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import {
    AirDryerForm, FilterForm, CompressorStep6, CompressorStep5, CompressorStep4,
    CompressorStep3, CompressorStep2, CompressorStep1, CompressorStep9, CompressorStep10,
    CompressorStep11, CompressorStep12, CompressorStep13, CompressorStep14, CompressorStep15,
    CompressorStep16, CompressorStep17, CompressorStep19, CompressorStep20, CompressorStep21,
    CompressorStep22, CompressorStep18, CompressorStep23, CompressorStep24


} from "../../components/Compressor"
// import maisonPompe from "../../assets/maisonpompe.jpeg"
const auditOptions = [
    "HVAC System",
    "Cold Room",
    "Compressor",
    "Motor System",
    "Steam System",
    "Lighting System",
];

const stepTitles = {
    "HVAC System": [
        "System Overview",
        "Cooling/Heating Performance",
        "Energy Consumption",
        "Maintenance & Troubleshooting",
        "Recommendations",
    ],
    "Compressor": [
        "Compressor Information",
        "",
        "Operating Hours and Performance",
        "Electrical System",
        "Power Readings",
        "",
        "Air Driver Information",
        "Filter Information",
        "",
        "",
        "Air Distribution System - Piping & FLow",
        "Air Demand",
        "",
        "1. Check for Leaks and Unnecessary Air Usage?",
        "2. Check for inappropriate Pressure Settings",
        "3. Check for Poor Maintenance Practices",
        "4. Running Compressors Unnecessarily",
        "5. Ineffient Piping System",
        "6. Lack of Energy Awareness Among Operators",
        "7. Ineffient Use of End-Use Equipment",
        "8. Cleaning Practices with Compressed Air",
        "9. Use of Open Hoses or Air Guns",
        "10. Cleaning Equipemnt and Practices",
        "Audit Completed",
    ],
    "Cold Room": [
        "Cold Room Specifications",
        "Insulation & Sealing",
        "Cooling Load & Capacity",
        "Temperature & Humidity Control",
        "Energy Efficiency Improvements",
    ],
    "Motor System": [
        "General Information",
        "Motor Specifications",
        "Drive and Control System",
        "System Operation and Load Conditions",
        "Motor Maintenance",
        "Energy Usage and Efficiency",
        "Loading Matching",
        "Environmental and External Factors",
        "Energy Saving Opportunities",
        "Benchmarking and Best Practices",
        "Documentation and Recommendations",
        "Audit Completed",
    ],
};




const AuditCheckList = () => {
    const navigate = useNavigate();
    const [selectedAudit, setSelectedAudit] = useState(null);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const totalSteps = selectedAudit ? stepTitles[selectedAudit].length : 0;
    const handleSelect = (audit) => {
        setSelectedAudit(audit);
    };

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const submitForm = async () => {
        try {
            const response = await fetch("https://your-api.com/audits", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Audit submitted successfully!");
            } else {
                alert("Failed to submit audit.");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    const stepContentsMap = {
        "Motor System": [
            (
                <div className="mb-4">
                    <p>What is the purpose of the motor system (e.g., pump, fan, conveyor)?</p>
                    <textarea name="motorPurpose" onChange={handleInputChange} className="w-full border p-2" placeholder="Type here" />

                    <p>Are there multiple motors in the system? If yes, how are they connected (e.g., parallel, series)?</p>
                    <div>
                        <input type="radio" id="no" name="multipleMotors" value="No" onChange={handleInputChange} />
                        <label htmlFor="no"> No </label>

                        <input type="radio" id="yes" name="multipleMotors" value="Yes" onChange={handleInputChange} />
                        <label htmlFor="yes"> Yes </label>

                        <input type="text" className="border p-2 ml-2" placeholder="Enter how they are connected if yes" />
                    </div>
                    <p>What is the total installed motor power (kW or HP)?</p>
                    <textarea className="w-full border p-2" placeholder="Type here" />
                    <p>What are the age and maintenance history of the motors?</p>
                    <textarea className="w-full border p-2" placeholder="Type here" />
                </div>
            ),
            (
                <div className="mb-4">
                    <p>What is the rated voltage, current, and frequency for each motor?</p>
                    <textarea className="w-full border p-2" placeholder="Type here" />
                    <p>What is the motor efficiency rating (e.g., IE1, IE2, IE3)?</p>
                    <textarea className="w-full border p-2" placeholder="Type here" />
                    <p>What is the service factor and overload capacity of the motor?</p>
                    <textarea className="w-full border p-2" placeholder="Type here" />
                    <p>Is the motor a standard induction motor, or is it a specialized motor (e.g., variable speed, permanent magnet)?</p>
                    <textarea className="w-full border p-2" placeholder="Type here" />
                    <p>Are motors appropriately sized for their load requirements?</p>
                    <div>
                        <input type="radio" id="yesLoad" name="loadSize" />
                        <label htmlFor="yesLoad"> Yes </label>
                        <input type="radio" id="noLoad" name="loadSize" />
                        <label htmlFor="noLoad"> No </label>
                    </div>
                </div>

            ),
            (
                <div className="mb-4">
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Is the motor system driven by a variable frequency drive(VFD)?
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">If VFDs are present, are they properly sized for the motor?</label>
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Are the VFD settings (e.g., frequency, acceleration, deceleration) optimized for energy efficiency?</label>
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Are there any power factor correction devices installed?</label>
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Is the motor system driven by a variable frequency drive(VFD)?
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
                    <div className="grid grid-cols-1 gap-4 my-4">
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Are the motor controllers and protection circuits functioning correctly?</label>
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

                </div>
            ),
            (
                <div className="mb-4">
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Is the motor operating under full load or part load? if part, load, what percentage of full load? </label>
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
                                    <span>Full load</span>
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
                                    <span>Partial load</span>
                                </label>

                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Does the motor experience frequent start/stop cycles? if so, how often?</label>
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Is there a load imbalance between motors in multi-motor systems?</label>
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Are there any power surges or drips during operation that affect motor performance?
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
                    <div className="grid grid-cols-1 gap-4 my-4">
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Is the motor system exposed to abnormal operating conditions (e.g., temperature extremes, high humidity)? </label>
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


                </div>
            ),
            (
                <div className="mb-4">
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Are routine maintenance tasks (e.g., lubrication, beraing checks, cleaning being performed regurlary?)</label>
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">How any issues with motor winding or insulation been reported?</label>
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Are there any unsual noises, vibrations, or heating observed during operation?</label>
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
                        <div className="form-item vertical">
                            <label className="form-label mb-4">Is the motor and associated equipment (bearings, belts, couplings) free from wear and tear?</label>
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


                </div>
            )
        ],
        "Compressor": [
            (
                <CompressorStep1 />
            ),
            (
                <CompressorStep2 />

            ),
            (
                <CompressorStep3 />

            ),
            (
                <CompressorStep4 />

            ),
            (
                <CompressorStep5 />
            ),
            (
                <CompressorStep6 />
            ),
            (
                <AirDryerForm />
            ),
            (
                <FilterForm />
            ),
            (
                <CompressorStep9 />
            ),
            (
                <CompressorStep10 />
            ),
            (
                <CompressorStep11 />
            ),
            (
                <CompressorStep12 />

            ),
            (
                <CompressorStep13 />
            ),
            (
                <CompressorStep14 />
            ),
            (
                <CompressorStep15 />
            ),
            (
                <CompressorStep16 />
            ),
            (
                <CompressorStep17 />
            ),
            (
                <CompressorStep18 />
            ),
            (
                <CompressorStep19 />
            ),
            (
                <CompressorStep20 />
            ),
            (
                <CompressorStep21 />
            ),
            (
                <CompressorStep22 />
            ),
            (
                <CompressorStep23 />
            ),
            (
                <CompressorStep24 />
            )

        ]
    }

    return (
        <div className="p-6 bg-[#E8F5E9] min-h-screen">
            <div className="p-4 rounded-md mb-4">
                <button className="flex items-center text-[#333333] hover:text-[#333333]" onClick={() => navigate(-1)}>
                    <ArrowLeft className="mr-2" /> Back
                </button>
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-lg  text-center" */}
            {!selectedAudit ? (
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-bold mb-4">Select a tool to get started</h2>
                    {auditOptions.map((audit) => (
                        <div key={audit} className="flex items-center mb-2">
                            <input
                                type="radio"
                                id={audit}
                                name="audit"
                                value={audit}
                                className="mr-2"
                                onChange={() => handleSelect(audit)}
                            />
                            <label htmlFor={audit} className="cursor-pointer">
                                {audit}
                            </label>
                        </div>
                    ))}

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
                            onClick={() => navigate("/audit/start")}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-bold mb-4 bg-orange-500 text-white p-2 rounded">{selectedAudit} </h2>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                        <div
                            className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        ></div>
                    </div>


                    <p className="text-gray-700 font-bold text-lg mb-4">{step}. {stepTitles[selectedAudit][step - 1]}</p>
                    {stepContentsMap[selectedAudit] && stepContentsMap[selectedAudit][step - 1] ? (
                        stepContentsMap[selectedAudit][step - 1]
                    ) : (
                        <p className="text-red-500">No content available for this selection</p>
                    )}
                    <div className="flex justify-between">
                        <button
                            className="bg-gray-300 px-4 py-2 rounded"
                            onClick={prevStep}
                            disabled={step === 1}
                        >
                            Go Back
                        </button>
                        {step < totalSteps ? (
                            <button
                                className="bg-orange-500 text-white px-4 py-2 rounded"
                                onClick={nextStep}
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                onClick={submitForm}
                            >
                                Finish
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuditCheckList;
