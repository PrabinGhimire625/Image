import Image from "../model/imageModel.js"
import fs from 'fs';

//saved the image
export const createImage=async(req,res)=>{
    try{
        let fileName;
        if(!req.file){
            fileName = "data:image/png;base64,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"
        }else{
            fileName="http://localhost:3000/" + req.file.filename
        }
        const image=Image.create({imageUrl:fileName})
        res.status(200).json({message : "Image is successfully created",data:image})

    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
}

//get the images
export const getImage=async(req,res)=>{
    try{
        const image=await Image.find();
        res.status(200).json({message:"Image is successfully get",data:image})
    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
}

//get the singleImages
export const getSingleImage=async(req,res)=>{
    try{
        const id=req.params.id
        const image=await Image.findById(id);
        res.status(200).json({message:"Single images is successfully fetched",data:image})
    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
}

//update the images
export const updateImage = async (req, res) => {
    try {
        const id = req.params.id;
        const oldData = await Image.findById(id);
        let fileName = oldData.imageUrl; 

        if (req.file) {
            const oldImagePath = oldData.imageUrl;
            const localHostUrlLength = "http://localhost:3000/".length;
            const newOldImagePath = oldImagePath.slice(localHostUrlLength);

            // Delete the old image
            fs.unlink(`storage/${newOldImagePath}`, (err) => {
                if (err) {
                    console.log("Error deleting old file:", err);
                } else {
                    console.log("Old file deleted successfully");
                }
            });

            fileName = "http://localhost:3000/" + req.file.filename; 
        }

        const updatedImage = await Image.findByIdAndUpdate(id, { imageUrl: fileName }, { new: true });


        res.status(200).json({ message: "Successfully updated the image", data: updatedImage });
    } catch (err) {
        console.error("Error updating image:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

//delete the images
export const deleteImage=async(req,res)=>{
   try{
    const id=req.params.id;
    await Image.findByIdAndDelete(id)
    res.status(200).json({message:"Image is successfuly deleted"})
   }catch(err){
    res.status(500).json({error:"Internal server error"})
   }
}


  