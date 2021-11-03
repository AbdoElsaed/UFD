const fs = require("fs");
const ytdl = require("ytdl-core");

export default async function handler(req, res) {
  try {
    const url = req.query.url;
    const q = req.query.q;
    // const id = ytdl.getURLVideoID(url);
    // let info = await ytdl.getInfo(id);
    // const type = req.query.type;
    // let name = `${info.videoDetails.title}.${type === "video" ? "mp4" : "mp3"}`;
    // let itag = type === "audio" ? 140 : q === "hd" ? "highest" : 18;
    res.setHeader("Content-Disposition", `attachment; filename="video.mp4"`);
    return await ytdl(url, {
      format: "mp4",
      quality: q === "hd" ? "highest" : 18,
    }).pipe(res);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
}
