const got = require('got');

export default async function handler(req, res) {
  try {
    const url = req.query.url;
    const q = req.query.q;
    
    const response = await got(url);
    const sdLink = response.body.split('sd_src:"')[1].split('",hd_tag')[0];
    const hdLink = response.body.split('hd_src:"')[1] ? response.body.split('hd_src:"')[1].split('",sd_src:"')[0] : sdLink;
    const linkToRedirect = q === 'hd' ? hdLink : sdLink;

    return res.redirect(linkToRedirect);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
}
