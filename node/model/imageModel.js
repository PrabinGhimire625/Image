import mongoose from "mongoose"
const imageSchema=new mongoose.Schema({
    imageUrl:{type:String, required:true}
})

const Image=mongoose.model("Image",imageSchema)
export default Image