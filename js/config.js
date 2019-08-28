require.config({
    waitSeconds : 3000,//在放弃加载一个脚本之前等待的秒数。
    baseUrl : '',
    paths : {
        "jquery":"js/lib/jquery.min",
        "bootstrap":"js/lib/bootstrap.min",
        "radialIndicator":"js/lib/radialIndicator",
        "common":"js/minejs/common",
        "target":"js/minejs/target",
        "validator":"js/lib/jquery.form-validator.min",
        "bootstrap_switch":"js/lib/bootstrap-switch",
        "bootstrap_select":"js/lib/bootstrap-select",
        "highcharts":"js/lib/highcharts",
        "exporting":"js/lib/exporting",
        "oldie":"js/lib/oldie",
        "orgchart":"js/lib/jquery.orgchart",
        "moment":"js/lib/moment-with-locales.min",
        "datetimepicker":"js/lib/bootstrap-datetimepicker.min",
        "paging":"js/lib/bootstrap-paginator",
        'toastr':"js/lib/toastr",
        'chosen':"js/lib/chosen.jquery.min",
        'bootstrapValidator':"js/lib/bootstrapValidator.min",
        'data':"js/lib/data"
    },
    shim:{
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            deps: ['jquery']
        },
        radialIndicator: {
            deps: ['jquery']
        },
        bootstrap_switch: {
            deps: ['jquery']
        },
        bootstrap_select: {
            deps: ['jquery']
        },
        highcharts: {
            deps: ["jquery"],
            exports: 'jquery'
        },
        exporting: {
            deps: ['highcharts'],
            exports: 'exporting'
        },
        orgchart: {
            deps: ["jquery"]
        },
        paging: {
            deps: ["jquery"]
        },
        toastr:{
            deps: ['jquery'],
            exports: 'toastr'
        },
        chosen:{
            deps: ['jquery'],
        }
        ,bootstrapValidator:{
            deps: ['jquery'],
        }
    },
    urlArgs : 'v=' + '2626231071818'
});