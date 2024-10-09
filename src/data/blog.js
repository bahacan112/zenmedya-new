import visitorOneAvatar from "@/../public/assets/images/blog/visitor-1.webp";
import visitorTwoAvatar from "@/../public/assets/images/blog/visitor-2.webp";
import visitorThreeAvatar from "@/../public/assets/images/blog/visitor-3.webp";

import blogOneImage from "@/../public/assets/images/blog/channels4_banner.jpg";
import blogTwoImage from "@/../public/assets/images/blog/blog-2.webp";
import blogThreeImage from "@/../public/assets/images/blog/blog-3.webp";
import blogFourImage from "@/../public/assets/images/blog/blog-4.webp";
import blogFiveImage from "@/../public/assets/images/blog/blog-4.webp";
import blogSixImage from "@/../public/assets/images/blog/blog-4.webp";
import blogSevenImage from "@/../public/assets/images/blog/blog-4.webp";
import blogEightImage from "@/../public/assets/images/blog/blog-4.webp";

import blogDetailImageOne from "@/../public/assets/images/blog/blog-detail-1.webp";
import blogDetailImageTwo from "@/../public/assets/images/blog/blog-detail-2.webp";

import recentPostImageOne from "@/../public/assets/images/blog/recent-post/rp-1.webp";
import recentPostImageTwo from "@/../public/assets/images/blog/recent-post/rp-2.webp";
import recentPostImageThree from "@/../public/assets/images/blog/recent-post/rp-3.webp";

const blogs = [
  {
    image: blogOneImage,
    category: "Entertainment",
    author: "",
    date: "",
    title: "Features Are Making Streaming Inclusive watching content",
    btnText: "Read more",
  },
  {
    image: blogTwoImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "How OTT Platforms Are Redefining Original Content Creation",
    btnText: "Read more",
  },
  {
    image: blogThreeImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "How Accessibility Features Are Making Streaming Inclusive",
    btnText: "Read more",
  },
  {
    image: blogFourImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "Trends, Predictions, and What's Next for Streaming",
    btnText: "Read more",
  },
  {
    image: blogFiveImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: " Features Are Making Streaming Inclusive watching content",
    btnText: "Read more",
  },
  {
    image: blogSixImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "How OTT Platforms Are Redefining Original Content Creation",
    btnText: "Read more",
  },
  {
    image: blogSevenImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "How Accessibility Features Are Making Streaming Inclusive",
    btnText: "Read more",
  },
  {
    image: blogEightImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "Trends, Predictions, and What's Next for Streaming",
    btnText: "Read more",
  },
];

const blogDetailData = {
  imageOne: blogOneImage,
  blogDetailImageOne: blogDetailImageOne,
  blogDetailImageTwo: blogDetailImageTwo,
  category: "Ekotürk",
  author: "",
  date: "",
  title: " AHU ORAKÇIOĞLU  -  Sanayi  Ticaret",
  descriptionOne:
    "Sanayi ve ticaret alanında faaliyet gösteren iş insanları ile gerçekleştirilen söyleşiler ekrana geliyor.",
  descriptionTwo:
    "Ekotürk ekonomi kanalında yayınlanan Ahu Orakçlıoğlu ile Sanayi ve Ticaret Programı, her Salı saat 11.30 ile 12.00 arasında izleyicilerle buluşuyor. Program, sanayi ve ticaret dünyasının nabzını tutarak, iş dünyasında yükselen trendleri ve sektörel gelişmeleri ele alıyor. Ahu Orakçlıoğlu’nun derinlemesine analizleriyle ekonomi ve iş dünyasında öne çıkan isimler, güncel konular hakkında detaylı bilgi paylaşıyor ve deneyimlerini izleyicilere aktarıyor.",

  descriptionThree:
    "Sanayi ve Ticaret Programı, geniş bir kitleye hitap ederken, konuklar için de kendilerini ve işlerini tanıtma adına mükemmel bir platform sunuyor. Sektörde yer alan profesyoneller, girişimciler ve uzmanlar, bilgi ve tecrübelerini geniş bir izleyici kitlesi ile paylaşarak, iş dünyasında daha fazla görünürlük kazanma şansına sahip oluyorlar.",
  descriptionFour:
    "Programa katılacak konuklar, sanayi ve ticaret alanında öne çıkan başarı hikayelerini anlatabilir, sektördeki yenilikçi yaklaşımları ve trendleri tartışabilirler. Ayrıca, programa katılım, uzmanlıklarını sergilemek ve sektör içindeki pozisyonlarını daha da güçlendirmek için bir fırsat sunuyor. Her bölümde ele alınan konular, sanayi ve ticaretin farklı alanlarına ışık tutarak, iş dünyasının profesyonelleri için değerli bilgiler içeriyor.",
  descriptionFive: "selam",

  qoutation: `Her Salı 11.30-12.00`,
  qoutationAuthor: "",
};

const commentData = {
  form: {
    title: "Leave A Reply",
    description:
      "Your email address will not be published. Required fields are marked *",
    fields: {
      fullName: {
        label: "Full Name",
        placeholder: "Enter Your Name",
      },
      email: {
        label: "Email",
        placeholder: "Enter Your Mail",
      },
      message: {
        label: "Write your message",
        placeholder: "Write your message",
      },
    },
    btnText: "Submit now",
  },
  comments: [
    {
      avatar: visitorOneAvatar,
      name: "Joey O'HaraV",
      description:
        "Another essential accessibility feature is audio description, also known as video description or descriptive video service (DVS). Audio description provides narrated descriptions of visual elements",

      replies: [
        {
          avatar: visitorTwoAvatar,
          name: "Brendan VonRueden",
          description:
            "Another essential accessibility feature is audio description, also known as video description or descriptive video service (DVS). Audio description provides",
        },
      ],
    },
    {
      avatar: visitorThreeAvatar,
      name: "Harvey Rohan",
      description:
        "Another essential accessibility feature is audio description, also known as video description or descriptive video service (DVS). Audio description provides narrated descriptions of visual",
    },
  ],
};

const sidebarData = {
  title: "Recent Post",
  posts: [
    {
      image: recentPostImageOne,
      date: "01 Jan 2024",
      title: "The Technology Powering Your Favorite movie",
      href: "#",
    },
    {
      image: recentPostImageTwo,
      date: "21 Feb 2024",
      title: "The Battle for Your Screen Time social media",
      href: "#",
    },
    {
      image: recentPostImageThree,
      date: "01 Jan 2024",
      title: "How OTT Platforms Are Shaping Pop Culture",
      href: "#",
    },
  ],
  categories: [
    {
      name: "Tv Series",
      href: "category",
    },
    {
      name: "Movies",
      href: "category",
    },
    {
      name: "Drama Series",
      href: "category",
    },
    {
      name: "Original Shows",
      href: "category",
    },
  ],
  tags: [
    {
      name: "Comedy",
      href: "category",
    },
    {
      name: "Drama",
      href: "category",
    },
    {
      name: "Horror",
      href: "category",
    },
    {
      name: "Trailer",
      href: "category",
    },
    {
      name: "Romantic",
      href: "category",
    },
    {
      name: "Recent",
      href: "category",
    },
    {
      name: "Scifi",
      href: "category",
    },
  ],
};

export default blogs;

export { blogDetailData, commentData, sidebarData };
