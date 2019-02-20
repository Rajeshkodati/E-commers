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
 */ 
$(document).ready(function(){
    $('.inner_menu').click(function(){
        $('#inner_nav').css({display:'block'});

    });

    $('.catagory').on('click',function(){
        const categoryType = $(this).data('type')
        //console.log($(this).data())
        getCategoryData(categoryType,renderData); 
    });

    function getCategoryData(category, callback){
        
        $.ajax({
            type:"GET",
            url:"http://localhost:3000/mommy",
            success:function(outerData){
                callback(outerData[category],category);
                console.log(outerData[category])
            }
        });
    }

    function renderData(data,category){
        $('#inner_nav').css({display:'none'});
        $('.category-data').remove();
        $('.title').remove();
        $('.product-details').remove();
        $('.product-menu').remove();
        $('#banner').hide();
        $('#head_cont').hide();
        data.map(loadImage => {
            $('#inner_cont').append(`<div class='category-data ${category}_display'><img src='${loadImage.img}'></div>`);
            $('#sub_inner').append(
                `<div class="top_head"><ul><li>Home</li><li>Women</li></ul>
                 <h1 class='title'>${loadImage.h1}</h1>
                 <span class ='product-details'>Showing Details<a href=#>Show all products</a></spn>
                 <select class ='product-menu'>Search:<option>Featured Items</option>
                 <option>New Items</option>
                <option>Best Selling Items</option>
                </select>
                </div>`
            );
        });
         
    $('.category-data').on('click',function(){
         
    });        
    }
});  