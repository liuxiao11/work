define(["jquery","bootstrap","radialIndicator","validator"],function($,btsp){
    $(".nav ul li").click(function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
    $(".left-menu .menulist").click(function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });

    /*处理模态框弹出两个以上滚动条问题*/
    $.fn.modal.Constructor.prototype.hideModal = function () {
        var that = this;
        this.$element.hide();
        this.backdrop(function () {
            //判断当前页面所有的模态框都已经隐藏了之后body移除.modal-open，即body出现滚动条。
            $('.modal.fade.in').length === 0 && that.$body.removeClass('modal-open');
            that.resetAdjustments();
            that.resetScrollbar();
            that.$element.trigger('hidden.bs.modal')
        })
    };

    var commonJs={};
    /*确认取消模态框*/
    commonJs.confirm = function (title,text,id='myModal') {
        var html = '<div class="modal fade" id="'+id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
            + '<div class="modal-dialog">'
            + '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">× </button>'
            + '<h4 class="modal-title" id="myModalLabel">'+ title +'</h4></div>'
            + '<div class="modal-body">'+ text +'</div>'
            +'<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'
            +'<button type="button" id="primary" class="btn btn-primary">确认</button></div>'
            +'</div></div></div>';
        $('body').append(html).on('click','#primary',function () {
            $('#'+id+'').hide();
            $('.modal-backdrop').hide();
        });
    };
    /*模态框*/
    commonJs.modal_sm = function (title,text) {
        var html = '<div class="modal fade bs-example-modal-sm" id="myModalInfo" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">' +
            '  <div class="modal-dialog modal-sm" role="document">' +
            '    <div class="modal-content">' +
            '      <div class="modal-header">' +
            '        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
            '        <h4 class="modal-title" id="gridSystemModalLabel">'+title+'</h4>' +
            '      </div>' +
            '      <div class="modal-body">' + text+
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>';
        $('body').append(html);
    };
    /*警示框*/
    commonJs.alert_message = function (title,text,type) {
        var html=
            '<div class="fade in alert alert-'+type+'" id="alert" style="min-width: 250px">' +
            '<div style="display:flow-root;"><a class="close" data-dismiss="alert">×</a></div>' +
            '<h4><strong>' + title+'</strong></h4>' +
            '<p>'+text+'</p><hr>' +
            '</div>';
        $('body').prepend(html);

    };
    /*确认取消警示框*/
    commonJs.alert_confirm = function (title,text,type,that,callback) {
        var html=
            '<div class="fade in alert alert-'+type+'" id="alert" style="min-width: 250px">' +
            '<div style="display:flow-root;"><a class="close" data-dismiss="alert">×</a></div>' +
            '<h4><strong>' + title+'</strong></h4>' +
            '<p>'+text+'</p>' +
            '<hr>' +
            '<button type="button" class="btn btn-'+type+'" id="delete" data-dismiss="alert">确认</button>&nbsp;&nbsp;' +
            '<button type="button" class="btn btn-default" data-dismiss="alert" >取消</button>' +
            '</div>';
        $('body').prepend(html).on('click', '#delete', function () {
            if (callback != null) {
                callback(that);
            }
        });

    };
    /*环形进度条*/
    commonJs.radialobj = function (id,num,radius=50,barWidth=10) {
        var radialObj4 = $(id).radialIndicator({
            barColor: {
                0:  '#FF0000',
                50: '#FFD700',
                80: '#33CC33',
            },
            percentage: true,
            barWidth: barWidth,
            barBgColor:'#c0c0c0',
            radius:radius
        }).data('radialIndicator');
        radialObj4.animate(num);
    };
    /*匹配两次密码一致性*/
    commonJs.equalTo = function(){
        $.formUtils.addValidator({
            name : 'equalTo',
            validatorFunction : function(value,$el ) {
                var equal = $el.attr('data-validation-equal');
                return $(equal).val() === value;
            },
            errorMessage : '两次密码不一致'
        });
    };
    /*饼图*/
    commonJs.operation = function (data,id) {
        var options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'none',
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: data.name,
                colorByPoint: true,
                data: data.data,
            }],
            legend:{
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                borderWidth: 0,
                itemMarginTop:10
            },
            colors: data.colors,
            credits:'enabled',
            exporting:[{
                buttons:[{
                    exportButton:'enabled',
                }]
            }],
        };
        var chart = Highcharts.chart(id, options);
    };
    return commonJs;
});