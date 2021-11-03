const got = require("got");
const cheerio = require("cheerio");
const fs = require("fs");


export default async function handler(req, res) {
  try {
    const url = req.query.url;
    const q = req.query.q;

    const response = await got(url);
    // const $ = cheerio.load(response.body);
    // const videoString = $("meta[property='og:reel']").attr("content");
    const html = response.body;
    let crop = "{\"" + html.substring(html.search("video_url"), html.search("video_url") + 1000);
    crop = crop.substring(0, crop.search(",")) + "}";
    const result =  JSON.parse(crop).video_url;

    if (result) {
      return res.redirect(result);
    } else {
      return res.send("invalid link!");
    }
    
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
}
