# qm-map-wrapper

qm-map-wrapper 是一款基于 Mapboxgl 的地图扩展类

## 安装

使用 npm 或 yarn 安装

```bash
npm install qm-map-wrapper
yarn add qm-map-wrapper

```

## 依赖

qm-map-print 开发依赖于fabric@5.3.0，file-saver，jspdf 库

## 使用

```js
import { MapWrapper } from 'qm-map-wrapper';


const mapDom = ref<HTMLDivElement | null>(null)

const mapOption={
    id: 'themeMap',
    container: '',
    center: [115.39047951086354, 33.2714096725866] as LngLatLike, // 界首市
    zoom: 9.5,
    maxZoom: 20
}
// 初始化 
  const map = new MapWrapper({
    pitch: 0,
    bearing: 0,
    attributionControl: false,
    renderWorldCopies: false,
    trackResize: true,
    preserveDrawingBuffer: true,
    style: {
      version: 8,
      glyphs: `/font/{fontstack}/{range}.pbf`,
      sources: {},
      layers: []
    }
    ...mapOption,
      container: mapDom.current as HTMLElement,
  })

// 挂载
 <div ref={mapDom} className={className ?? 'map-wrapper'} id="map-wrapper"></div>


```
