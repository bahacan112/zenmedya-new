import { Schema } from "redis-om";

export const programSchema = new Schema("program", {
  id: { type: "string" },
  name: { type: "string" },
  starttime: { type: "string" },
  endtime: { type: "string" },
  genres: { type: "string" },
  advisory: { type: "string[]" },
  ratingid: { type: "string" },
  picture: { type: "string" },
  isnpvr: { type: "string" },
  introduce: { type: "string" },
  programType: { type: "string" },
  channelid: { type: "string" },
  broadcastType: { type: "string" },
  seasonInfo: { type: "string" },
});
