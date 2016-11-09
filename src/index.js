import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World 2.b',
  });
});


app.get('/t2b',(req,res)=>{

const qFio = req.query.fullname;

res.send(prepareFio(qFio));

// var re = /\s* \s*/



// if(qFio!=undefined)
// {

//   var prepFio = qFio.split(re,3);

//   var retval = prepareFio  //getPartFio(prepFio[2],false) +' '+ getPartFio(prepFio[1]) +'. ' + getPartFio(prepFio[0]) +'.'; // prepFio[0] +  prepFio[1] +  prepFio[2];

//   res.send(prepareFio(qFio));
// }

});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

function prepareFio(fio)
{ 
  var re = /\s* \s*/;
 
  var rez = 'Invalid fullname';

  fio = fio.trim();

  try
  {
    var prepFio = fio.split(re);

    if(prepFio.length >3 || fio == '' || !(/[^\p{L}]/.test(fio)) || /[0-9_/]/.test(fio) )
      throw new Error();

    if(prepFio.length == 3)
        rez = getPartFio(prepFio[2],false) +' ' + getPartFio(prepFio[0]) + '. ' + getPartFio(prepFio[1]) + '.';

    if(prepFio.length == 2)
        rez = getPartFio(prepFio[1],false) +' ' + getPartFio(prepFio[0]) + '.';

    if(prepFio.length == 1)
        rez = getPartFio(prepFio[0],false);

  }
  catch(err)
  {
  rez = 'Invalid fullname'
  
  console.log(err.message);
  }

  


  return rez;

}

function getPartFio(part,reduction = true)
{

  if(part != undefined)
  {

    if(reduction)
        return part.charAt(0).toUpperCase();
        else return part.slice(0, 1).toUpperCase() + part.slice(1).toLowerCase();
  }


  return '';
}