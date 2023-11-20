const mongoose=require('mongoose');
const mongoURI="mongodb+srv://defineuser:ML3EGyRdhnPr2BcH@cluster0.e4k8zoi.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  module.exports = connectToMongo;