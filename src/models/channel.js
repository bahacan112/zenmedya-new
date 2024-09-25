import { Schema } from "redis-om";

export const channelSchema = new Schema("channel", {
  title: { type: "string" },
  href: { type: "string" },
  logo: { type: "string" },
});
