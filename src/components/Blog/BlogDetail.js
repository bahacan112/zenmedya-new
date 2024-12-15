import Link from "next/link";
import Image from "next/image";
import LiveStreamingFeature from "../Feature/LiveStreamingFeature";
import Ahu from "@/../public/assets/images/blog/ahu-orakcioglu.jpg";
import Naz from "@/../public/assets/images/blog/naz-ozdegirmenci.png";
import AnaHaber from "@/../public/assets/images/blog/ana-haber.jpg";
import SonSeans from "@/../public/assets/images/blog/son-seans.jpg";
import PiyasaHatti from "@/../public/assets/images/blog/piyasa-hatti.jpg";
import YatirimKlubu from "@/../public/assets/images/blog/pelin-yantur.png";

const ProgramCard = ({ kanal, program, gun, saat, programResmi }) => (
  <div className="bg-gradient-to-r from-teal-500 via-blue-600 to-purple-700 p-8 rounded-lg shadow-xl max-w-4xl mx-auto flex mb-12 transform hover:scale-105 transition-transform">
    <div className="w-full">
      <h3 className="text-center font-extrabold text-white mb-6 border-b-4 border-white pb-2 uppercase tracking-wide">
        <p className="text-4xl">{kanal}</p>
        <span className="text-2xl">{program}</span>
      </h3>
      <h4 className="text-center text-xl font-semibold text-white mb-4">
        {gun} <p className="text-yellow-300">Saat: {saat}</p>
      </h4>
      <div className="row my-6 flex justify-center">
        <div className="category-card overflow-hidden flex justify-center rounded-lg shadow-lg ">
          <Image
            src={programResmi}
            alt={program}
            width={800}
            className="rounded-lg"
          />
        </div>
      </div>
      <p className="text-lg text-white leading-relaxed mb-6 text-center">
        Toplam Katılım Süresi : 20-25 Dakika
      </p>
    </div>
    <hr />
  </div>
);

export default function BlogDetail() {
  const programs = [
    {
      kanal: "EKOTÜRK",
      program: "Ahu Orakçlıoğlu ile Sanayi Ticaret Programı",
      gun: "Her Salı",
      saat: "11.30 - 12.00",
      programResmi: Ahu,
    },
    {
      kanal: "EKOTÜRK",
      program: "Ahu Orakçlıoğlu ile Gün Ortası",
      gun: "Hafta İçi Her Gün",
      saat: "12.00 - 13.00",
      programResmi: Ahu,
    },
    {
      kanal: "EKOTÜRK",
      program: "Ali Çağatay ile Ana Haber",
      gun: "Hafta İçi Her Gün",
      saat: "19.00 - 20.00",
      programResmi: AnaHaber,
    },
    {
      kanal: "EKOTÜRK",
      program: "Ali Çağatay ile Son Seans",
      gun: "Hafta İçi Her Gün",
      saat: "19.00 - 20.00",
      programResmi: SonSeans,
    },
    {
      kanal: "BLOOMBERG",
      program: "Piyasa Hattı",
      gun: "Hafta İçi Her Gün",
      saat: "14.00 - 15.00",
      programResmi: PiyasaHatti,
    },
    {
      kanal: "BLOOMBERG",
      program: "Yatırım Klubü",
      gun: "Hafta İçi Her Gün",
      saat: "10.15 - 11.00",
      programResmi: YatirimKlubu,
    },
    {
      kanal: "CNBC-E",
      program: "E-Cafe",
      gun: "Hafta İçi Her Gün",
      saat: "12.00 - 12.30",
      programResmi: Naz,
    },
  ];

  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12">
      {programs.map((program, index) => (
        <ProgramCard key={index} {...program} />
      ))}
      <br />
      <br />
      <h3 className="text-center text-3xl font-extrabold text-gray-800 mb-8">
        Neden Katılmalısınız?
      </h3>
      <ul className="flex flex-col list-disc list-inside space-y-6 mb-12">
        <li className="text-xl text-gray-700 mb-4">
          <strong className="text-teal-600">Geniş İzleyici Kitlesi:</strong>{" "}
          Ekotürk’ün ekonomi odaklı izleyici kitlesine ulaşarak, iş dünyasındaki
          görünürlüğünüzü artırabilirsiniz.
        </li>
        <li className="text-xl text-gray-700 mb-4">
          <strong className="text-teal-600">Sektörde Bilinirlik:</strong>{" "}
          Program sayesinde işinizi, firmanızı veya projelerinizi öne çıkarma
          fırsatı bulabilirsiniz.
        </li>
        <li className="text-xl text-gray-700 mb-4">
          <strong className="text-teal-600">Uzmanlık Paylaşımı:</strong> Sanayi
          ve ticaretle ilgili önemli gelişmeleri ve sektörel dinamikleri
          paylaşarak, bilgi birikiminizi geniş kitlelerle buluşturabilirsiniz.
        </li>
        <li className="text-xl text-gray-700 mb-4">
          Bu program, hem bilgi alışverişi hem de iş dünyasında daha güçlü bir
          yer edinmek isteyenler için kaçırılmayacak bir fırsat.
        </li>
      </ul>
      <br />
      <br />
      <LiveStreamingFeature />
    </section>
  );
}
