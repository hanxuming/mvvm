//因为 MVVM 可以 new，所以 MVVM 肯定是一个类
//用 es6写法定义
class MVVM{
    //在类里面接受参数,例如，el,和data
    constructor(options){
        //首先，先把可用的东西挂载在实例上
        this.$el = options.el;
        this.$data = options.data;
        //然后，判断如果有要编译的模版再进行编译
        if(this.$el){
            //用 元素 和 数据 进行编译
            new Compile(this.$el,this);
        }
    }
}