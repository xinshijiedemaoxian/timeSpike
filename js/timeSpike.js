/**
 * Created by Administrator on 2016-12-29.
 */
//这里要用构造函数去new一个时间,也就是我们期望的时间(目标时间)
var targetTime=new Date("2016/12/29 12:00:00");
//然后获取本地的时间,用我们目标时间-本地时间,就是需要多长时间,我们要做的就是对这个时间差进行操作,让他倒计时
//一说到倒计时,我们应该要想到的事定时器,
function secKill() {
    var timer=null;
    window.clearInterval(timer);

    //这里是我们夺取的当地时间(也就是你这台电脑上的时间)
    var nowTime=new Date();

    //这个就是时间差
    var diffTime=targetTime-nowTime;
    //console.log(diffTime);//结果是毫秒数

    //我们首先要思考怎么去把时间按年 月 日 分开??
    //下面我给大家计算一下
    //1年=12个月,1个月=30天,1天=24H,1H=60min,1min=60s,1s=1000ms
    //打个比方:10里面有几个4 ? 是不是商2余5 ?那么这样就确定有2个4,但是余数就不能算
    //同理我们用时间差这个时间除以换算过来的毫秒数,即1个月=(1000*60*60*24*30)ms
    //这里要注意的是我们不能四舍五入,只取 "商",余数要继续往下取 "商",即月,日,时,分,秒
    //大家可以好好理解一下,最好是拿个笔计算一下----->有助于理解

//        var months=Math.floor(diffTime/(1000*60*60*24*30));
    var dates=Math.floor(diffTime%(1000*60*60*24*30)/(1000*60*60*24));
    var hours=Math.floor(diffTime%(1000*60*60*24*30)%(1000*60*60*24)/(1000*60*60));
    var minues=Math.floor(diffTime%(1000*60*60*24*30)%(1000*60*60*24)%(1000*60*60)/(1000*60));
    var second=Math.floor(diffTime%(1000*60*60*24*30)%(1000*60*60*24)%(1000*60*60)%(1000*60)/1000);

    //求出相应的时间后,我们进行字符串的拼接,让他更加形象
    //console.log(s);
//        $('#month_show').html(months+"月");
    $('#day_show').html(dates+"天");
    $('#hour_show').html(hours+'时');
    $('#minute_show').html(minues+'分');
    $('#second_show').html(second+'秒');

    //这里就是作出判断,当目标时间于本地时间相差小于1s的时候,打开链接
    if(diffTime<=1000){
        clearInterval(timer1);
        /*
         $(".time-item").html("<a class='hintys' href='https://shop126229942.taobao.com/?spm=a230r.7195193.1997079397.2.D3sW9S'>前往秒杀</a>");
         */
    }
}
secKill();
var timer1=window.setInterval(secKill,1000);

