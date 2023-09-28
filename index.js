require("dotenv").config();

require("./license-robot")
  .getPersonalLicense(
    "Unity_lic.alf",
    process.env.ID,
    process.env.PASSWORD,
    process.env["2FA_TOKEN"]
  )
  .then(console.log);
