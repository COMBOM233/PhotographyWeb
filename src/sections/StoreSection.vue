<template>
    <div class="relative flex flex-col items-center justify-center w-full h-96">

    </div>
    <div class="relative flex flex-col items-center justify-center w-full h-96">
        <AnimatedContent class="absolute left-0 bottom-20">
            <h1 class="uppercase text-5xl mb-4 font-semibold text-white">
                KEEP IN TOUCH WITH US
            </h1>
        </AnimatedContent>
        <AnimatedContent class="absolute left-0 bottom-0">
            <p class="uppercase text-5xl mb-4 font-semibold text-white">
                地 理 位 置
            </p>
        </AnimatedContent>
        <AnimatedContent class="absolute left-2 bottom-20">
            <div class="bg-white w-64 h-1 rounded-none"></div>
        </AnimatedContent>



    </div>
    <div class="relative w-full h-max md:h-screen bg-white">
        <div class="absolute right-0 top-0 w-1/2 h-full hidden md:block">
            <baidu-map class="w-full h-full" :center="{ lng: 116.404, lat: 39.915 }" :zoom="15"
                :scroll-wheel-zoom="true" @ready="handleMapReady">
                <!-- 启用滚轮缩放 -->
                <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            </baidu-map>
        </div>
        <div class="flex flex-col md:absolute md:left-0 md:top-0 w-full md:w-1/2 h-1/2 items-center">
            <div
                class="flex ml-24 md:ml-0 w-full h-max text-4xl font-semibold items-center justify-center md:mt-96">
                <h1>Photography Studio</h1>
            </div>

            <div class="flex flex-col ml-4 md:ml-0 w-max h-max text-2xl items-center justify-center mt-10">
                <div class="flex w-full h-max text-2xl">
                    <h1>联系地址: <span class="block md:inline">NOWHERE</span></h1>
                </div>
                <div class="flex w-full h-max text-2xl mt-10">
                    <h1>客服热线: <span class="block md:inline">1234566789</span></h1>
                </div>
                <div class="flex w-full h-max text-2xl mt-10">
                    <h1>客服邮箱: <span class="block md:inline">1234566789@qq.com</span></h1>
                </div>
            </div>
            <div class="flex w-full h-24 items-center justify-center mt-10">
                <img src="@/assets/QRcode/QRcode_pic.jpg" alt="store_qrcode" class="w-full h-full object-scale-down">
            </div>
            <div class="flex w-full h-max text-xs mt-2 items-center justify-center mb-4 md:mb-0">
                <h1>DONT SCAN THIS IT LEADS TO NOTHING</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AnimatedContent from '@/components/AnimatedContent.vue';

// 标记点位置
const markerPosition = ref({ lng: 116.404, lat: 39.915 });
const infoWindowOpen = ref(false);

// 定义标记点图标
const markerIcon = {
    url: 'https://api.map.baidu.com/images/marker_red.png',
    size: { width: 50, height: 50 },
    opts: { imageSize: { width: 23, height: 25 } }
};

// 定义BMap和map的类型
interface MapReadyParams {
    BMap: any; // 百度地图API类型
    map: any;  // 百度地图实例类型
}

// 地图初始化完成后的回调
const handleMapReady = ({ BMap, map }: MapReadyParams) => {
    // 启用滚轮缩放
    map.enableScrollWheelZoom(true);

    // 添加比例尺控件
    map.addControl(new BMap.ScaleControl());

    // 添加导航控件
    map.addControl(new BMap.NavigationControl());

    // 直接在地图上添加标记点
    const point = new BMap.Point(116.404, 39.915);

    // 创建自定义大小的图标
    const myIcon = new BMap.Icon(
        "https://api.map.baidu.com/images/marker_red.png",
        new BMap.Size(50, 50), // 设置图标大小为100x100
        {
            imageSize: new BMap.Size(50, 50), // 图片大小
            anchor: new BMap.Size(50, 100) // 锚点，使标记点底部中心对准坐标点
        }
    );

    // 使用自定义图标创建标记
    const marker = new BMap.Marker(point, { icon: myIcon });
    map.addOverlay(marker);

    // 为标记点添加点击事件
    marker.addEventListener('click', () => {
        const infoWindow = new BMap.InfoWindow(
            '<div class="p-2"><h4 class="font-bold mb-2">摄影工作室</h4><p>地址: 北京市海淀区</p><p>电话: 010-12345678</p></div>',
            {
                width: 250,
                height: 120,
                title: '工作室信息'
            }
        );
        marker.openInfoWindow(infoWindow);
    });

    // 确保标记点可见
    console.log('地图已加载，标记点位置:', point);
};

// 点击标记点显示信息窗口
const showInfo = () => {
    infoWindowOpen.value = true;
};

// 关闭信息窗口
const closeInfoWindow = () => {
    infoWindowOpen.value = false;
};
</script>

<style scoped>
/* 确保地图容器有明确的高度和宽度 */
.baidu-map {
    width: 100%;
    height: 100%;
}
</style>