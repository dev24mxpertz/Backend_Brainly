const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  Storyimage: [],
  Paragraph: [],
});

const wordExploreSchema = new mongoose.Schema({
  Storytitle: String,
  Storyttext: String,
  Storyimage: [],
  Storyitext: String,
  Synonyms:{
    type:String,
  },
  Antonyms:{
    type:String
  }
});

const brainQuestSchema = new mongoose.Schema({
  Question: String,
  Option: [],
  Answer: String,
});

const adventureSchema = new mongoose.Schema({
  Title: { type: String },
  Image: [],
  Status: String,
  Storyadvenure: {
    Storytitle: String,
    content: [storySchema],
  },
  Wordexplore: [wordExploreSchema],
  Brainquest: [brainQuestSchema],
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;
