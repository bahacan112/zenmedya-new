import Link from "next/link";
import Image from "next/image";
import LiveStreamingFeature from "../Feature/LiveStreamingFeature";
import profileIcon from "@/../public/assets/images/icons/profile-icon.svg";
import clockIcon from "@/../public/assets/images/icons/clock-tranparent.svg";
import colonIcon from "@/../public/assets/images/icons/colon.svg";
import ahu from "@/../public/assets/images/blog/ahu-orakcioglu.jpg";
import { blogDetailData as data } from "@/data/blog";
/* <div className="blog blog-details">
      <div className="thumb position-relative">
        <Link href="#">
          <Image src={data.imageOne} alt="blog" />
        </Link>
        <div className="badge detalis position-absolute bottom-0 bg-body p-2">
          <div className="type lh-1 p-2 fs-18 text-uppercase fw-normal ls-1">
            {data.category}
          </div>
        </div>
      </div>
      <div className="content px-0">
        <div className="d-flex align-items-center gap-sm-4 gap-2 fs-18 mb-3 lh-1">
          <div className="d-inline-flex align-items-center gap-1">
            <Image src={profileIcon} alt="author" />
            <div className="author-name text-uppercase">{data.author}</div>
          </div>
          <div>/</div>
          <div className="d-inline-flex align-items-center gap-1">
            <Image src={clockIcon} alt="time" />
            <div className="time ms-1 flex-shrink-0 text-uppercase">
              {data.date}
            </div>
          </div>
        </div>
        <h3 className="blog-title text-uppercase mb-3">
          <Link href="#" className="gradient-link fw-medium">
            {data.title}
          </Link>
        </h3>
        <p className="text-block has-dropcap">{data.descriptionOne}</p>
        <p className="text-block">{data.descriptionTwo}</p>
        <blockquote className="quotation bg-primary mt-3">
          <Image src={colonIcon} alt="color" />
          <em className="quotation--quote d-block text-uppercase mb-3 mt-3">
            {data.qoutation}
          </em>
          <p className="quotation--author lh-1 mb-0 fw-medium">
            -- {data.qoutationAuthor}
          </p>
        </blockquote>
        <p className="text-block">{data.descriptionThree}</p>
        <div className="row my-3">
          <div className="col-6">
            <Image src={data.blogDetailImageOne} alt="blog" />
          </div>
          <div className="col-6">
            <Image src={data.blogDetailImageTwo} alt="blog" />
          </div>
        </div>
        <p className="text-block">{data.descriptionFour}</p>
      </div>
    </div> */
export default function BlogDetail() {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto flex mb-12 ">
      <h3 className="text-center font-bold text-white mb-6 border-b-4 border-teal-500 pb-2 mb-10 ">
        Ahu Orakçlıoğlu ile Sanayi Ticaret Programı
      </h3>
      <br />
      <br />

      <div className="row my-3 ">
        <div className="category-card ">
          <Image src={ahu} alt="ahu-orakcioglu" width={800} className="" />
        </div>
        <br />
        <p className="text-xl text-white leading-relaxed mb-6 mt-12">
          Ekotürk ekonomi kanalında yayınlanan{" "}
          <strong className="text-teal-600">
            Ahu Orakçlıoğlu ile Sanayi ve Ticaret Programı
          </strong>
          , her Salı saat 11.30 ile 12.00 arasında izleyicilerle buluşuyor.
          Program, sanayi ve ticaret dünyasının nabzını tutarak, iş dünyasında
          yükselen trendleri ve sektörel gelişmeleri ele alıyor. Ahu
          Orakçlıoğlu’nun derinlemesine analizleriyle ekonomi ve iş dünyasında
          öne çıkan isimler, güncel konular hakkında detaylı bilgi paylaşıyor ve
          deneyimlerini izleyicilere aktarıyor.
        </p>
      </div>
      <br />
      <p className="text-lg text-white leading-relaxed mb-6">
        <strong className="text-teal-600">Sanayi ve Ticaret Programı</strong>,
        geniş bir kitleye hitap ederken, konuklar için de kendilerini ve
        işlerini tanıtma adına mükemmel bir platform sunuyor. Sektörde yer alan
        profesyoneller, girişimciler ve uzmanlar, bilgi ve tecrübelerini geniş
        bir izleyici kitlesi ile paylaşarak, iş dünyasında daha fazla görünürlük
        kazanma şansına sahip oluyorlar.
      </p>
      <LiveStreamingFeature />

      <br />
      <p className="text-lg text-white leading-relaxed mb-6">
        Programa katılacak konuklar, sanayi ve ticaret alanında öne çıkan başarı
        hikayelerini anlatabilir, sektördeki yenilikçi yaklaşımları ve trendleri
        tartışabilirler. Ayrıca, programa katılım, uzmanlıklarını sergilemek ve
        sektör içindeki pozisyonlarını daha da güçlendirmek için bir fırsat
        sunuyor. Her bölümde ele alınan konular, sanayi ve ticaretin farklı
        alanlarına ışık tutarak, iş dünyasının profesyonelleri için değerli
        bilgiler içeriyor.
      </p>
      <br />
      <br />
      <h3 className=" text-center text-2xl font-semibold text-gray-800 mb-4">
        Neden Katılmalısınız?
      </h3>

      <ul className="flex flex-col  list-disc list-inside space-y-4 mb-6">
        <li className="text-lg text-gray-700 mb-4">
          <strong className="text-teal-600">Geniş İzleyici Kitlesi:</strong>{" "}
          Ekotürk’ün ekonomi odaklı izleyici kitlesine ulaşarak, iş dünyasındaki
          görünürlüğünüzü artırabilirsiniz.
        </li>
        <li className="text-lg text-gray-700 mb-4">
          <strong className="text-teal-600">Sektörde Bilinirlik:</strong>{" "}
          Program sayesinde işinizi, firmanızı veya projelerinizi öne çıkarma
          fırsatı bulabilirsiniz.
        </li>
        <li className="text-lg text-gray-700 mb-4">
          <strong className="text-teal-600">Uzmanlık Paylaşımı:</strong> Sanayi
          ve ticaretle ilgili önemli gelişmeleri ve sektörel dinamikleri
          paylaşarak, bilgi birikiminizi geniş kitlelerle buluşturabilirsiniz.
        </li>
      </ul>

      <p className="text-lg text-white leading-relaxed mb-12">
        Bu program, hem bilgi alışverişi hem de iş dünyasında daha güçlü bir yer
        edinmek isteyenler için kaçırılmayacak bir fırsat.
      </p>
    </section>
  );
}
