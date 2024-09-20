// pages/deneme.js
"use client";
import { useEffect, useState, useRef } from "react";
/* import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap stil dosyasını dahil et
 */ import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function Deneme() {
  const [programData, setProgramData] = useState(null);
  const fetchedDataRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/yayinAkisi");
      const data = await response.json();
      fetchedDataRef.current = data;
      setProgramData(data);
    };

    fetchData();
  }, []);
  const breadcrumb = {
    title: "Yayın AkıSı",
    links: [
      { name: "Home", href: "/" },
      { name: "Bloomberg HT", href: "#" },
    ],
  };

  return (
    <>
      <main className="main">
        <HeaderOne data={{ breadcrumb }} />
        <h3 className="mb-4">Bloomberg HT Program Takvimi</h3>
        {programData && (
          <div className="accordion accordion-flush" id="programAccordion">
            {Object.keys(programData).map((day, index) => (
              <div className="accordion-item" key={day}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    {day}
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
                      {programData[day].map((program) => (
                        <div
                          className="col-lg-3 col-sm-6 mb-4"
                          key={program.title}
                        >
                          <div className="card">
                            <img
                              src={program.imgSrc}
                              alt={program.title}
                              className="card-img-top"
                            />
                            <div className="card-body">
                              <h3 className="card-title">{program.title}</h3>
                              <p className="card-text">{program.description}</p>
                              <p className="card-text text-muted">
                                {program.time}
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
