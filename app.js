const newLocal = 'body';
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
     $('#cart-dialog-box').hide();
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
        let dataPass=true;
        $('#inner_nav').css({display:'none'});
        $('.category-data').remove();
        $('.title').remove();
        $('.product-details').remove();
        $('.product-menu').remove();
        $('#banner').hide();
        $('#head_cont').hide();
        data.map(loadImage => {
            $('#inner_cont').append(`<div class='category-data ${category}_display'>
                            <img class='item-image' src='${loadImage.img}'>
                            <fgcaption class='item-caption'>Choose Options</fgcaption>
                            <p class='item-title'>${loadImage.title}</p>
                            <span class='item-price'>${loadImage.price}</span>
                            </div>`);
            if(dataPass){
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
                console.log(loadImage.title);   
                $('.title_menu').append(`<h2>${loadImage.title}</h2><span>${loadImage.price}</span>`)
                 dataPass = false;
            } 
        });

        $('.category-data').on('click',function(){
            /* let x = $('.item-title');
            x.filter(y => {
                $('.item-title').text();
                 console.log(y);
                console.log($(".title_head").text());
 */            //})
            $('.model-box').show();
            $('#inner-model').show();
            $('#image-box').append(`<img class = 'render-image' src='${$(this).children().attr('src')}'>`);
           // .html($(this).next().next().text());
        }); 
              
    }

    $('#image-box').on('mousemove', '.render-image' ,function(event){
       /*  var cx,cy;
        cx = document.querySelector('.render-image').offsetWidht();
        cy = document.querySelector('.render-image').offsetHeight();
        console.log(cx);
        console.log(cy);
        let lens = $('<div class="zoom-lens"></div>');
        console.log($('#image-box').append(lens))
 */      // $('.zoom-image').show();
       //console.log($('.zoom_image').append(`<img class = 'render-image' src='${$(this).attr('src')}'>`));
          
    });
    

    $('.close-model').click(function(){
        $('#image-box').children().remove();
        $('.model-box').hide();
        $('#inner-model').hide();
        console.log($('.render-image'));
    });
     let scrollView = false;
    /* $(document).scroll(function(){
        if($(this).scrollTop()>100  && !scrollView){
            $('#top_navbar').hide();
            $('#logo').hide()
            $('#bottom_nav').toggleClass('scroll-fixed');
            //$('#sub_inner').css({marginTop:'-150px'});
            scrollView = true;
        }
        else{
            $('#sub_inner').css({marginTop:'-150px'});
        }
    }); */ 
    //add cart items
    $('#add-cart').on('click', function(event){
        
        let addCartCount = $('#item-quentity').val();      
        const selectSize = document.getElementById('select-size').value;
        const selectProduct = document.getElementById('select-product').value
        console.log($('#image-box').children().attr('src')); 
        $('#cart-count').html(addCartCount);
        if (!selectSize || !selectProduct) {
            alert('is Empty');
            return false;
        } else {
            addCarItems();
            return true;
        }   
     });
    
   addItemIncrease(); 
   $('#cart-title').on('click',function(){
      $('#cart-dialog-box').show();
   });
   $('.viewcart').on('click',function(){
       alert('');
   })
}); 
//add- itelm increase;
function addItemIncrease(){
     let addIncrease = document.getElementById('item-increase');
     let addDecrease = document.getElementById('item-decrease');
     let addValue = document.getElementById('item-quentity');
     let increase;
     let decrease;
     addIncrease.addEventListener('click',function(){
        increase = addValue.value;
        addValue.value = ++increase;
        decrease =addValue.value;
     });

     addDecrease.addEventListener('click',function(){
        addValue.value = --decrease;    
        if(decrease <= 1){
          addValue.value = 1;    
        }
     });
}

function addCarItems(){
    let multiple = document.getElementById('item-quentity').value;
    let itemDetails = {};
    itemDetails.title = $('.item-title').html();
    itemDetails.price = $('.item-price').html().slice(0,2).trim();
    itemDetails.image = $('.render-image').attr('src');
    
    $('#preview-cart').append(`<li class='previewcart-list'><div><div><img class='inner-image' src='${itemDetails.image}'>
                               </div>
                            <div class='add-cart-title'><h4>${itemDetails.title}</h4>
                            <span class ='add-cart-price'>${multiple +"*"+ itemDetails.price}</span></div></div></li>`);

}