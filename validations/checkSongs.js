const checkName = (req, res, next) => {
  // console.log("Checking name");
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkArtist = (req, res, next) => {
  // console.log("Checking artist");
  if (req.body.artist) {
    next();
  } else {
    res.status(400).json({ error: "Artist is required" });
  }
};

const checkBoolean = (req, res, next) => {
  // console.log("Checking boolean");
  const is_favorite = req.body.is_favorite;
  if (
    is_favorite == "true" ||
    is_favorite == "false" ||
    is_favorite == true ||
    is_favorite == false ||
    is_favorite == undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a Boolean value" });
  }
};

module.exports = { checkName, checkArtist, checkBoolean };
