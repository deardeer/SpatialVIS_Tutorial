* html中依靠<div>实现布局，<div>以block”块“的形式布局，在实现html页面是，遵循“自上而下，从左往右”这个顺序
- display: flex, place-content: space-between 布局
- display: block

* <nav>， <blockquote>, <section>几个新的标签
* 控制间隔上，padding是影响DOM“内部”元素的布局；margin是影响DOM“外部”元素的布局
* px单位：像素；em单位: 相对于对象内字体的长度（是相对长度）；rem是相对HTML根元素
* ？scss

* 在<div> 中，想要让元素居中，使用 text-align: center;
* 关于文本的一些样式：
    text-transform: uppercase; //全部大写
    font-weight: bold; //字体加粗
    color: gray; //字体颜色
    letter-spacing: .3em; //字间距
    font-size: 2.5em;
    line-height: 1.3em; 
    margin-top: .2em;

* 在<a>修饰的文本，去除下划线
    text-decoration: none; 去除下划线by <a>

* 利用@media only screen and (min-width: 768px)来实现响应式网页，这个语句的意思是，
当屏幕最小宽度为768px, 使用定义中的样式

* <ul>中bullet随宽度自适应的一个样式
grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));

### css布局系统###

两种布局系统flexbox和grid布局系统；flexbox是一维布局系统，适合如导航栏局部布局；grid为二维布局系统，适合全局布局。

[参考文献](https://juejin.cn/post/6940627375537258527)
#### Flex系统####
#### Grid系统####
当容器被设置为display: grid之后，其中子元素的float, display等设置都失效。