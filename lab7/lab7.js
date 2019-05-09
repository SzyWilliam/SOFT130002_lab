$("document").ready(function () {
   let smallPics = $('main #thumbBox img');
   let bigFig = $('main figure img');
   let bigFigCap = $('main figure figcaption');

   smallPics.each(function () {
       $(this).click(function (){
           bigFig.attr('src',$(this).attr('src').replace("small", "medium"));
           let caption = $("<em></em>");
           caption.html($(this).attr('alt'));
           bigFigCap.html(caption);
           bigFigCap.append($('<br>'));
           bigFigCap.append($(this).attr('title'));
       })
   });


    let inputs = $('main form input');
    inputs.each(function (index, element) {
        $(this).change(function () {
            let allvalue = 'opacity('+(inputs[0].value)+"%) "+
            'saturate('+(inputs[1].value)+"%) "+
            'brightness('+(inputs[2].value)+"%) "+
            'hue-rotate('+(inputs[3].value)+'deg) '+
            'grayscale('+(inputs[4].value)+"%) "+
            'blur('+(inputs[5].value)+'px)';
            bigFig.css('filter',allvalue);
            bigFig.css('-webkit-filter', allvalue);
            //alert(inputs[index].nextElementSibling.tagName);
             inputs[index].nextElementSibling.innerHTML = inputs[index].value;
        });


    })


});