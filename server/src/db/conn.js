const mongoose = require('mongoose')

mongoose.connect("momngodb://localhost:27017/authentication",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>
{
    console.log(`connection successfull`);
}).catch((e)=>
{
    console.log(`connection unsuccessfull`);
})

