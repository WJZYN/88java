<template>
    <div class="test_two_box">
        <video
        id="myVideo"
        class="video-js"
        >
        <source
            src="//vjs.zencdn.net/v/oceans.mp4"
            type="video/mp4"
        >
        </video>
    </div>
    </template>

    <script>
    /* eslint-disable */
    export default {
    name: "TestTwo",
    data() {
        return {};
    },
    mounted() { 
        this.initVideo();
    },
    methods: {
        initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: "muted",
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "800px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "400px"
        });
        }
    }
    };
    </script>

    <style scoped>
    </style>


作者：看到请叫我不要熬夜
链接：https://www.jianshu.com/p/8b8023c7ed37
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。