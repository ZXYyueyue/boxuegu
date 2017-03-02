/**
 * Created by Administrator on 2017/2/25.
 */
define(['jquery','template'], function ($,template) {
    //讲师列表数据缓存
    /*var teacherListCache;
    try{
        teacherListCache=JSON.parse(localStorage.getItem('teacherListCache'));

    }catch(e){}*/
    //渲染讲师列表
    /*if(teacherListCache){
        var html=template('teacher-list-tpl',{list:teacherListCache});
        $('#teacher-list-tbody').html(html);
    }*/
    $.get('/v6/teacher', function (data) {
        if(data.code==200){
            var html=template('teacher-list-tpl',{list:data.result});
            $('#teacher-list-tbody').html(html);
        }
    });
    //通过事件委托的方式给动态生成的a标签绑定点击事件，
    //然后获取讲师详细信息并展示
    $('#teacher-list-tbody').on('click','.teacher-view', function () {
        $.get('/v6/teacher/view',{
            tc_id:$(this).parent().attr('data-id')
        }, function (data) {
            if(data.code==200){
                var html=template('teacher-view-tpl',data.result);
                $('#teacherModal').html(html);
            }
        });
    });
});