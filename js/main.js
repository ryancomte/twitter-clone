$(function(){

    var char = $('#char-count');
    var button = $('button.button');
    var newTweet = $('.tweet-compose');
    var stats = $('.stats');
    var reply = $('.reply');
    var retweetSelected = false;
    var favoriteSelected = false;
    var nameSrc = $('.profile-name').text();

    $('.avatar').tooltip({title: nameSrc});



    var hideElem = function(elem1,elem2){
        elem1.hide();
        elem2.hide();
    }

    var showElem = function(elem1,elem2){
        elem1.show();
        elem2.show();
    }

    hideElem(char,button);
    hideElem(stats,reply);

   $("textarea").first().click(function(){
       showElem(char,button);
   });

   $("textarea").click(function(){
       $(this).addClass('new-height');
   });


    $("textarea").on('keyup',function(){
        var length = this.value.length;
        $(char).text(140-length);
        if(char.text() <= 10){
            $(char).css('color', 'red');
        }else{
            $(char).css('color', 'black');
        }
        if(length > 140){
            $(button).attr('disabled', 'disabled');
        }
        if(length < 140){
            $(button).removeAttr('disabled');
        }
    })


    $(button).on('click', function(){
        var tweetData = $(newTweet).val();
        var titleAttr = $('.profile-summary .avatar').attr('title', nameSrc);
        var pictureSrc = $('.avatar').first().attr('src');
        var nameSrc = $('.profile-name').text();
        var newDiv = $('.tweet').eq(0).clone();
        newDiv.find('.tweet-text').text(tweetData);
        newDiv.find('.avatar').attr('src', pictureSrc);
        newDiv.find('.fullname').text(nameSrc);
        $('#stream').prepend(newDiv);
        $(newTweet).val('');
    });

    $('.tweet').on('click', function(e){
        if(e.target.nodeName != "LI"){
            $(this).find(stats).slideToggle('fast');
            $(this).find(reply).slideToggle('fast');
        }
    });

    $('li').on('click', function(){
        var retweet = $(this).find('span').hasClass('action-retweet');
        var favorite = $(this).find('span').hasClass('action-favorite');
        if(!retweetSelected && !favoriteSelected){
            if(retweet){
                $(this).closest(find('.top-content .action-retweet').css('display', 'inline-block');
                retweetSelected = true;
            }else if(favorite){
                $('.top-content .action-favorite').css('display', 'inline-block');
                favoriteSelected = true;
            }
        }else if(retweetSelected || favoriteSelected){
            $('.top-content .action-combined').css('display', 'inline-block');
            $('.top-content .action-retweet').css('display', 'none');
            $('.top-content .action-favorite').css('display', 'none');
        }
    });

});



