import YayinAkislari from "@/components/Category/YayinAkislari";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Link from "next/link";

export default function Category() {
  const breadcrumb = {
    title: "TV ",
    links: [
      { name: "Home", href: "/" },
      { name: "Yayın AKışları", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        <YayinAkislari />
      </main>

      <FooterOne />
    </>
  );
}
