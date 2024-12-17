import React from "react";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import styles from "./billboard.css";
import Resim1 from "@/../public/assets/images/Resim1.jpg";
import Resim2 from "@/../public/assets/images/Resim2.jpg";
import Resim3 from "@/../public/assets/images/Resim3.png";
import Resim4 from "@/../public/assets/images/Resim4.png";
import Resim5 from "@/../public/assets/images/Resim5.jpg";
import Image from "next/image";
const DışMekanReklamları = () => {
  const breadcrumb = {
    title: "Yurdışı Reklam",
    links: [
      { name: "Home", href: "/" },
      { name: "Yurtdışı Reklam", href: "#" },
    ],
  };

  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      <main className="main-div">
        <h3 className=" font-bold text-center mb-8">
          Dış Mekan Reklam Çözümleri
        </h3>

        {/* Billboard Bölümü */}
        <section className="mb-24 flex flex-col justify-center text-center">
          <h4 className=" font-semibold mb-4">Billboard Reklamları</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src={Resim1}
                width={600}
                height={300}
                alt="Billboard Örneği"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Prime Lokasyon</h3>
              <p className="text-gray-600">
                Yüksek trafik alanlarında stratejik olarak konumlandırılmış
                billboardlar ile görünürlüğünüzü artırın.
              </p>
              <div className="mt-4">
                <span className="text-gray-700 font-semibold">
                  Fiyat: €10,000
                </span>
                <span className="block text-sm text-gray-500">
                  Süre: 4 hafta
                </span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src={Resim2}
                width={600}
                height={300}
                alt="Billboard Örneği"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Dijital Billboardlar</h3>
              <p className="text-gray-600">
                Dinamik içeriklere sahip yüksek teknoloji dijital billboardlar
                ile reklamınızı verin.
              </p>
              <div className="mt-4">
                <span className="text-gray-700 font-semibold">
                  Fiyat: €15,000
                </span>
                <span className="block text-sm text-gray-500">
                  Süre: 2 hafta
                </span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src={Resim5}
                width={600}
                height={300}
                alt="Billboard Örneği"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Şehir Merkezi</h3>
              <p className="text-gray-600">
                Yoğun yaya trafiğine sahip şehir merkezlerinde reklam alanınızı
                konumlandırın.
              </p>
              <div className="mt-4">
                <span className="text-gray-700 font-semibold">
                  Fiyat: €12,000
                </span>
                <span className="block text-sm text-gray-500">
                  Süre: 3 hafta
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Çift Katlı Otobüs Reklamları Bölümü */}
        <section className="mb-12 flex flex-col justify-center text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Çift Katlı Otobüs Reklamları
          </h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src={Resim3}
              width={600}
              height={300}
              alt="Çift Katlı Otobüs"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium mb-2">Tam Otobüs Kaplama</h3>
            <p className="text-gray-600">
              Otobüsün tamamına reklam kaplaması yaparak şehri dolaşan büyük bir
              reklam alanı yaratın.
            </p>
            <div className="mt-4">
              <span className="text-gray-700 font-semibold">
                Fiyat: €20,000
              </span>
              <span className="block text-sm text-gray-500">Süre: 4 hafta</span>
            </div>
          </div>
        </section>

        {/* Tramvay Reklamları Bölümü */}
        <section className="mb-12 flex flex-col justify-center text-center">
          <h3 className="text-2xl font-semibold mb-4">Tramvay Reklamları</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src={Resim4}
                width={600}
                height={300}
                alt="Tramvay Reklamı"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Yan Panel Reklamları</h3>
              <p className="text-gray-600">
                Tramvayın yan panellerine reklam yerleştirerek şehirde yüksek
                görünürlük elde edin.
              </p>
              <div className="mt-4">
                <span className="text-gray-700 font-semibold">
                  Fiyat: €7,500
                </span>
                <span className="block text-sm text-gray-500">
                  Süre: 4 hafta
                </span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src={Resim5}
                width={600}
                height={300}
                alt="Tramvay Reklamı"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Tam Tramvay Kaplama</h3>
              <p className="text-gray-600">
                Tramvayın tamamına reklam kaplaması yaparak şehri baştan sona
                reklamla donatın.
              </p>
              <div className="mt-4">
                <span className="text-gray-700 font-semibold">
                  Fiyat: €25,000
                </span>
                <span className="block text-sm text-gray-500">
                  Süre: 8 hafta
                </span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src={Resim3}
                alt="Tramvay Reklamı"
                className="w-full h-48 object-cover rounded-lg mb-4"
                width={600}
                height={300}
              />
              <h3 className="text-xl font-medium mb-2">
                Tramvay İç Mekan Reklamları
              </h3>
              <p className="text-gray-600">
                Tramvay iç mekanlarında reklam alarak yolcularla doğrudan
                etkileşim sağlayın.
              </p>
              <div className="mt-4">
                <span className="text-gray-700 font-semibold">
                  Fiyat: €10,000
                </span>
                <span className="block text-sm text-gray-500">
                  Süre: 6 hafta
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </>
  );
};

export default DışMekanReklamları;
