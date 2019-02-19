/* let inner = document.querySelector('.angel');
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
 */
 /* for(let i=0; i<type.length; i++){
       if(type[i] === '.women'){
        $( type[i]).click(function(){
            $.ajax({
                type:"GET",
                url:"http://localhost:3000/mommy",
                success:function(outerData){
    
                   renderData(outerData);
                }
            })
        });
       }
     }
 */ let type;
$(document).ready(function(){
     type = ['men','women','baby','all'];
    // $.ajax({
    //     type:"GET",
    //     url:"http://localhost:3000/mommy",
    //     success:function(outerData){
    //        renderData(outerData);
    //     }
    // })
    $('.inner_menu').click(function(){
    $('#inner_nav').css({display:'block'});
    });
       
    $('.men').click(function(){
        $.ajax({
            type:"GET",
            url:"http://localhost:3000/mommy",
            success:function(outerData){

                renderMenData(outerData);
            }
        })
    });
    $('.women').click(function(){
        $.ajax({
            type:"GET",
            url:"http://localhost:3000/mommy",
            success:function(outerData){

                renderWomenData(outerData);
            }
        })
    });
    $('.all').click(function(){
        console.log("this");
        $.ajax({
            type:"GET",
            url:"http://localhost:3000/mommy",
            success:function(outerData){

                renderAllData(outerData);
            }
        })
    });
    $('.baby').click(function(){
        console.log("this");
        $.ajax({
            type:"GET",
            url:"http://localhost:3000/mommy",
            success:function(outerData){

                renderBabyData(outerData);
            }
        })
    });
})

function renderWomenData(data,event){
    $('.display').show();
    $('#banner').hide();
    $('#head_cont').hide();
    // console.log(type[0])
    data.women.map(loadImage =>
            $('#inner_cont').append(`<div class='display'><img src='${loadImage.img}'></div>`));
           $('.women').off('click');
           $('.men_display').hide();
           $('.baby_display').hide();
           $('.all_display').hide(); 
           
}
function renderMenData(data,event){
    $('.men_display').show();
    $('#banner').hide();
    $('#head_cont').hide();
    // console.log(type[0])
    data.men.map(loadImage => 
            $('#inner_cont').append(`<div class='men_display'><img src='${loadImage.img}'></div>`));
           $('.men').off('click');  
           $('.display').hide();
           $('.baby_display').hide();
           $('.all_display').hide();
}
function renderBabyData(data,event){
    $('.baby_display').show();
    $('#banner').hide();
    $('#head_cont').hide();
    // console.log(type[0])
    data.baby.map(loadImage => 
            $('#inner_cont').append(`<div class='baby_display'><img src='${loadImage.img}'></div>`));
           $('.baby').off('click');  
           $('.men_display').hide();
           $('.display').hide();
           $('.all_display').hide();
}
function renderAllData(data,event){
    // console.log(type[0])

    $('.all_display').show();
    $('#banner').hide();
    $('#head_cont').hide();
    data.all.map(loadImage => 
            $('#inner_cont').append(`<div class='all_display'><img src='${loadImage.img}'></div>`));
           $('.all').off('click');  
           $('.men_display').hide();
           $('.display').hide();
           $('.baby_display').hide();
}

$('#inner_cont').on('click','.display',function(){
    alert('')
});