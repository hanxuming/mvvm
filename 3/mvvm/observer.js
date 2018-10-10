class Observer{
    constructor(data){
        this.observer(data);
    }
    observer(data){
        //要对这个data数据将原有的属性改成set和get的形式
        if(!data || typeof data !== 'object'){
            return;
        }
        //要将数据 一一劫持 先获取到 data 到 key 和 value
        Object.keys(data).forEach(key => {
            //劫持
            this.defineReactive(data,key,data[key]);
            this.observer(data[key]); //深度递归劫持
        })
    }
    //定义响应式
    defineReactive(obj,key,value){
        let that = this;
        // 在获取某个值到时候，
        Object.defineProperty(obj,key,{
            enumerable : true,
            configurable : true,
            get(){ //当取值时调用到方法
                return value;
            },
            set(newValue){ //当给data属性中设置值到时候，更改获取的属性到值
                if(newValue != value){
                    //这里的this不是实例
                    that.observer(newValue);//如果是对象，继续劫持
                    value = newValue;
                }
            }
        })
    }
}