//背景知识：
//将真实的DOM移入到内存中 fragment
//同样定义一个类
class Compile{
    constructor(el,vm){
        //el可能是 #app or dom，所以要进行判断
        this.el = this.isElementNode(el)?el:document.querySelector(el); 
        this.vm = vm;
        if(this.el){
            //如果这个元素能获取到，我们才开始编译
            //1.先把这些真实的DOM移入到内存中 fragment
            //2、编译 =》 提前想要的元素元素节点 v-model 和文本节点 {{}}
            //3、把编译好的 fragment 在塞回到页面里去

            //1.先把这些真实的DOM移入到内存中 fragment
            let fragment  = this.node2fragment(this.el);
        }
    }
    /*专门写一些辅助方法*/
    //判断是否是元素节点
    isElementNode(node){
        return node.nodeType === 1;
    }
    /*核心的方法*/
    //需要将el中的内容全部放到内存中
    node2fragment(el){
        //文档碎片 内存中的dom节点
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = el.firstChild){
            fragment.appendChild(firstChild);
        }
        return fragment; //内存中的节点
    }
}