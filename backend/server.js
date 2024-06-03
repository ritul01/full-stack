import express from 'express';
const app=express();

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });
app.use(express.static('dist'))

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            content:'What do you call a bear with no teeth?',
            punchline:'A gummy bear'
        },
        {
            id:2,
            content:'What do you call a bear with no teeth//..?',
            punchline:'A second bear'
        },
        {
            id:3,
            content:'What do you call a bear with no teeth .......///?',
            punchline:'A third bear'
        },
        {
            id:4,
            content:'What do you call a bear with no teeth . /. / ./ ./ ./ .?',
            punchline:'A fourth bear'
        },
        {
            id:5,
            content:'What do you call a bear with no teeth?',
            punchline:'A fifth bear'
        }
    ]
    res.send(jokes)
});
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})