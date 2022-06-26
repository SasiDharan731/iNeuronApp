// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
mongoose.connect('mongodb+srv://dharan731:Asdfgh2014@cluster0.ov2m6.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true});

//Schema model
let newSchema = new mongoose.Schema({
  msg : {type: String},
  byBot : {type: Boolean}
})


let Chat = mongoose.model('Chat', newSchema);
export default function handler(req, res) {
  Chat.find({}, (err, allBooks) => {
  
    if (err) console.error(err);
  
    res.status(200).json(allBooks)
  }) 
}
