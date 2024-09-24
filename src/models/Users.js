import { Schema } from "redis-om";

export const userSchema = new Schema("user", {
  artist: { type: "string" },
  title: { type: "text" },
  year: { type: "number" },
  tel: { type: "string" },
});
