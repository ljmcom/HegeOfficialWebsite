/**
 * Created by LJM�� on 2017/4/4.
 */
$(function(){
    getbanner()
    bounce()
})

//һ��ͨ��ajax���̨��ȡ�ֲ�ͼƬ
function getbanner (){
    // var getDate=function(callback){
    //     $.ajax({
    //         type:'get',
    //         url:'../script/index.json',
    //         data:{},
    //         success:function(result){
    //             console.log(result)
    //             callback(result);
    //         },
    //         dataType:"json"
    //     })
    // }
    //��������ҳ�����Ⱦ
    var isMobile =true;//���ƶ��˼Ӹ����
    var render=function(){
        //1�������жϣ���������ƶ���768
        var width =$(window).width();

        if(width >=768){
            isMobile=false;
        }
        else{
            isMobile=true;
        }
        //console.log(isMobile);
        getDate(function(result){
            var html =template('bannerBox',{"items":result,"isMobile":isMobile})
            $('.carousel-inner').html(html);
            //�塢ʹ��underscore��ʵ��ģ��������滻
            var indicators=template('indicatorTemp',{"items":result})
            $('.carousel-indicators').html(indicators);
        })
    }
    render()
    //��������Ļ�����仯ʱ��������Ⱦ
    $(window).on('resize',function(){
        var width = $(window).width();
        //console.log(width);
        if(isMobile==true && width>=768||isMobile==false && width<768){
            render();
        }
    })
    //�ġ�ʵ�ֻ�������touch���¼�
    var startX=0;
    var moveX=0;
    var distanceX=0;
    var banner=document.querySelector('.carousel-inner');
    banner.addEventListener('touchstart',function(e){
        startX= e.touches[0].clientX;
    })
    banner.addEventListener('touchmove',function(e){
        moveX= e.touches[0].clientX;
        distanceX=moveX-startX;
    })
    banner.addEventListener('touchend',function(e){
        if(Math.abs(distanceX)>100){
            if(distanceX<0){
                $('.carousel').carousel('next')
            }
            else if(distanceX>0){
                $('.carousel').carousel('prev')
            }
        }
    })
}

//�����ײ�logo�ֲ�����ʽ
function bounce(){
    // 1���ײ�logo�����Ķ���Ч��
    if($(window).width()>1100){
        $('.double .down,.double .up').css({'height':$('.hotPro').innerHeight()/2})
        $(window).scroll(function(){
            if($(window).scrollTop()+$(window).height()>$('.indexBottom').offset().top+$('.indexBottom').innerHeight()/2){
                $('.indexBottom').addClass('bounce animated');
            }else{
                $('.indexBottom').removeClass('bounce animated');
            }
        });
    }
    var appLi=$('.application li');
    appLi.eq(appLi.length-1).addClass('last').css({'height':appLi.eq(0).height()});

//2���ײ�logo��ʱ���ұ������Ķ���Ч��
    $('#banner').animate({
        arrows: true,
        dots: true,
        autoplay: true
    });
    var appLi=$('.application li');
    var liCount=0;
    setInterval(function(){
        appLi.eq(liCount).addClass('active').siblings().removeClass('active');
        liCount++;
        if(liCount>appLi.length) liCount=0;
    },1500)
}


