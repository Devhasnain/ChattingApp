const Conversation = require("../database/models/Conversation");

const GetConversation = async (req,res) =>{
   try {
    let conversations = await Conversation.find({});
    
    if(conversations.length){
        return res.status(200).json({
            conversation:conversations[0]
        })
    }else{
        return res.status(200).json({
            conversation:[]
        })
    }

   } catch (error) {
    return res.status(error?.status ?? 500).json({msg:error?.message, success:false});
   } 
};

module.exports = {
    GetConversation
}