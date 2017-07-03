/**
 * Created by LJM�� on 2017/4/11.
 */
$(function () {
//1���ص�������ť
    var topMain=$("#goTop").height()+100//��ͷ���ĸ߶ȼ�ͷ����nav����֮��ľ��롣
    $(window).scroll(function(){
        if ($(window).scrollTop()>topMain){//��������������ľ������topMain���nav�����������.nav_scroll��������Ƴ���
            $("#goTop").css("display","block")
        }
        else
        {
            $("#goTop").css("display","none")
        }
    });
    $("#goTop").click(function () {
        var speed=500;//�������ٶ�
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });

//   2�� �������ߵġ�constact us���Ի�����������
    $("#chatToolMail i").click(function(){
        $("#chatToolBox").toggleClass("hiddenRight");
    });

//    3���������Feedback�Ի���
    $('#chatMessageBtn').click(function(){
        $('.mfp-bg').slideDown(200);
    })
    $('.mfp-form-custom .mfp-close').click(function(){
        $('.mfp-bg').slideUp(200);
    })

    var bb = $(".path").children().children()
    console.log(bb);
})
