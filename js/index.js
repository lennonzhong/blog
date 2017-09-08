$(function () {

    $.ajax({
        url:'../data.json',
        dataType:'json',
        success:function(data){

            console.log(data);
            //渲染界面
            var html='';
            for(var k in data){
                html+=template('indexTemplate',data[k]);
            }
            $("#MainPage").html(html);
        },
        error:function(err){
            console.log(err);
        }
    });

    $.ajax({
        url:'../note.json',
        dataType:"json",
        success:function(data){
            console.log(data);
            //渲染界面
            var html='';
            for(var k in data){
                html+=template('SkillTemplate',data[k]);
            }
            $("#xinde").html(html);
        },
        error:function(err){
            console.log(err);
        }
    })
});


