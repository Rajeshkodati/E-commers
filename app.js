let inner = document.querySelector('.angel');
let li = document.querySelectorAll('.innernav');
inner.addEventListener('click',function(){
   document.querySelector('#inner_nav').style.display= 'block';
});
li.forEach(function(x){
  x.addEventListener('click',function(){
      console.log(this);
      let ajax = new XMLHttpRequest();
      ajax.open('GET',"http://localhost:3000/mommy");
      ajax.onload =function(){
          let ourData = JSON.parse(ajax.responseText);
          renderData(ourData);
      };
    ajax.send();  
    console.log(ajax);
  });
  
});
function renderData(data){
    for(let i=0; i<data.length; i++){
        let div = document.createElement('div');
        div.style.backgroundImage = `url(${data[i].img})`;
        document.getElementById('inner_cont').appendChild(div);

    }
   
}
