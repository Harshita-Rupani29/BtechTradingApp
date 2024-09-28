async function hello(req,res){ 
  //pehle path /hello jaoge to y chalega

  try {
    res.send('Hello World')
  } catch (error) {
    console.log('Something went Wrong')
  }

}
module.exports = {hello}