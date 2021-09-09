<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import arrow from '../arrow.json';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'ThreeTest',

  props: {
    width: {
      type: Number,
      default: window.innerWidth,
    },
    height: {
      type: Number,
      default: window.innerHeight,
    },
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null,
      meshCar: null,
      planeMesh: null,

      step: 0,
      geometry: null,
    };
  },

  methods: {
    // 创建json
    createJson() {
      // const loader = new THREE.JSONLoader(); // 已经从源码中移除该方法 不知道为啥真是一个不好的方法
      // const materials = new THREE.PointsMaterial({
      //   size: 4,
      //   sizeAttenuation: true,
      //   color: 0xffffff,
      //   transparent: true,
      //   opacity: 1,
      // });
      this.geometry = new THREE.BufferGeometry();

      const vertices = new Float32Array(arrow.vertices);
      console.log(vertices);
      // itemSize = 3 因为每个顶点都是一个三元组。
      this.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      const material = new THREE.PointsMaterial(arrow.materials);
      const mesh = new THREE.Points(this.geometry, material);
      this.scene.add(mesh);

      // loader.load(arrow, function(geo, materials) {
      //   var colors = [];
      //   for (var i = 0; i < geo.vertices.length; i++) {
      //     colors.push(new THREE.Color('rgb(255, 255, 255)'));
      //   }

      //   geo.colors = colors;

      //   //调整geometry在场景中的位置和大小

      //   geo.center();
      //   geo.normalize();
      //   geo.scale(500, 500, 500);
      //   geo.rotateX(Math.PI / 4);
      //   geo.rotateY(-Math.PI / 8);
      //   glist.push(geo);
      // });
    },

    // 初始化贴图
    createPoints() {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.crossOrigin = '';
      const mapDot = textureLoader.load('static/logo.png');

      //初始变换点组
      const geometry = new THREE.Geometry();
      for (let i = 0; i < 5000; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = 800 * Math.random() - 400;
        vertex.y = 800 * Math.random() - 400;
        vertex.z = 800 * Math.random() - 400;

        geometry.vertices.push(vertex);

        geometry.colors.push(new THREE.Color(1, 1, 1));
      }

      const material = new THREE.PointsMaterial({
        size: 1,
        sizeAttenuation: true,
        color: 0xffffff,
        transparent: true,
        opacity: 1,
        map: mapDot,
      });
      console.log('object');
      material.vertexColors = THREE.VertexColors;
      const particles = new THREE.Points(geometry, material);
      this.scene.add(particles);
    },
    init: function() {
      /**
       * 创建场景对象Scene
       */
      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2(0x000000, 0.001); // 雾化
      /**
       * 创建网格模型
       */
      this.createJson();
      this.createPoints();
      /**
       * 创建地板
       */

      /**
       * 光源设置
       */
      //点光源
      const point = new THREE.PointLight(0xffffff);
      point.position.set(0, 2000, 0); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      //环境光
      const ambient = new THREE.AmbientLight(0x444444);
      this.scene.add(ambient);
      // console.log(scene)
      // console.log(scene.children)
      /**
       * 相机设置
       */
      const width = this.width; //窗口宽度
      const height = this.height; //窗口高度
      const k = width / height; //窗口宽高比
      const s = 2; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      this.camera.position.set(50, 50, 50); //设置相机位置
      this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height); //设置渲染区域尺寸
      this.renderer.setClearColor(0x000000, 1); //设置背景颜色
      const content = document.getElementById('container');
      console.log(content);
      content.appendChild(this.renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数
      this.controls = new OrbitControls(this.camera, this.renderer.domElement); //创建控件对象
      // 控制鼠标Y轴角度在0 到90度
      this.controls.minPolarAngle = Math.PI * 0.005; // radians
      this.controls.maxPolarAngle = Math.PI * 0.45; // radians
      // this.controls.addEventListener('change', this.render);
      // renderer.render(scene, camera);

      // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
      const axisHelper = new THREE.AxisHelper(250);
      this.scene.add(axisHelper);
    },
    render() {
      this.renderer.render(this.scene, this.camera); //执行渲染操作

      this.geometry.rotateY(Math.PI / 2000);

      requestAnimationFrame(this.render); //请求再次执行渲染函数render
    },
  },
  mounted() {
    this.init();
    this.render();
  },
};
</script>
<style scoped>
#container {
  height: 400px;
}
</style>
