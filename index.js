const express=require('express');
const app=express();
app.use(express.json());

const responses=[
    {firstname:"tony",secondname:"stark",fullname:"tony stark",message:"This is a GET Call"},
    {firstname:"jerin",secondname:"george",fullname:"jerin george",message:"hello world"}
]

app.get('/contact/:firstname&&:secondname',(req,res)=>{
    const person=responses.find(c=> c.firstname===req.params.firstname&& c.secondname===req.params.secondname);
    if(!person)res.status(400).send("this Person not in the list");
    res.send(person);

});

app.post('/contact/new',(req,res)=>{
    const newone={
        firstname:req.body.firstname,
        secondname:req.body.secondname,
        fullname:req.body.firstname+req.body.secondname,
        message:"this is a post call"
    };
    responses.push(newone)
    res.send(newone)

});

const port= process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('port started')
});
