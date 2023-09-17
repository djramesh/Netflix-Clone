const express= require('express')
const cors=require('cors')
const mongoose= require('mongoose')
const userRoutes=require('./routes/UserRoutes')
const app=express()
const path=require('path')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/netflix',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('DB Connected Successfully!')
})

app.use(express.static(path.join(__dirname, './netflix-ui/build')))

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './netflix-ui/build/index.html'))
})

app.use('/api/user',userRoutes)

app.listen(5000,console.log('listening on port'))