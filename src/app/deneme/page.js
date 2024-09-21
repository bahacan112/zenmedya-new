// pages/deneme.js
"use client";

import { useEffect, useState, useRef } from "react";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function Deneme() {
  const [programData, setProgramData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchedDataRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.zenmedya.org/api/yayinAkisi");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        fetchedDataRef.current = data;
        setProgramData(data);
      } catch (error) {
        console.error("Veri alırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  const breadcrumb = {
    title: "Yayın Akısı",
    links: [
      { name: "Home", href: "/" },
      { name: "Bloomberg HT", href: "#" },
    ],
  };

  const turkishDays = {
    Monday: "PAZARTESI",
    Tuesday: "SALI",
    Wednesday: "CARSAMBA",
    Thursday: "PERSEMBE",
    Friday: "CUMA",
    Saturday: "CUMARTESI",
    Sunday: "PAZAR",
  };

  const filteredProgramData = programData
    ? Object.keys(programData).reduce((acc, day) => {
        const filteredPrograms = programData[day].filter((program) =>
          program.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredPrograms.length) {
          acc[day] = filteredPrograms;
        }
        return acc;
      }, {})
    : null;

  return (
    <>
      <main className="main">
        <HeaderOne data={{ breadcrumb }} />
        <h3 className="mb-4  container">Bloomberg HT Program Takvimi</h3>
        <div className="mb-4  container">
          <input
            type="text"
            className="form-control"
            placeholder="Program arayın..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredProgramData && (
          <div className="accordion bg-dark  container" id="programAccordion">
            {Object.keys(filteredProgramData).map((day, index) => (
              <div className="accordion-item bg-dark" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button bg-dark text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {turkishDays[day] || day}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#programAccordion"
                >
                  <div className="accordion-body">
                    <div className="row">
                      {filteredProgramData[day].map((program) => (
                        <div
                          className="col-lg-3 col-sm-6 mb-4"
                          key={`${program.title}-${program.time}-${program.id}`}
                        >
                          <div className="card bg-dark text-white">
                            <img
                              src={program.imgSrc}
                              alt={program.title}
                              className="card-img-top"
                            />
                            <div className="card-body">
                              <h3 className="card-title text-white">
                                {program.title}
                              </h3>
                              <p className="card-text">{program.description}</p>
                              <p className="card-text text-white">
                                Saat : {program.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <FooterOne />
    </>
  );
}
