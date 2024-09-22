import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { channels } from "@/data/channels";

const ChannelGrid = () => {
  return (
    <div
      className="container mt-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        borderRadius: "0.5rem",
      }}
    >
      <div className="d-flex flex-wrap justify-content-center">
        {channels.map((channel, index) => (
          <div
            className="card m-2"
            style={{
              backgroundColor: "transparent",
              border: "none",
              maxWidth: "300px",
            }}
            key={index}
          >
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <Image
                src={channel.logo}
                alt={channel.title}
                width={100}
                height={100}
                className="card-img-top"
              />
              <div
                className="card-body"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "0.5rem",
                }}
              >
                <h5 className="card-title">{channel.title}</h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelGrid;
