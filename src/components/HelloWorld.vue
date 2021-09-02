<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'ThreeTest',
  props: {
    width: {
      type: Number,
      default: 512,
    },
    height: {
      type: Number,
      default: 320,
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
      GRASS_LIGHT_MATERIAL: null,
    };
  },
  methods: {
    init: function() {
      /**
       * 创建场景对象Scene
       */
      this.scene = new THREE.Scene();
      /**
       * 创建网格模型
       */
      // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
      const geometryCar = new THREE.CylinderGeometry(5, 5, 10, 2);
      const geometry = new THREE.BoxGeometry(10, 10, 10); //创建一个立方体几何对象Geometry
      const material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
        opacity: 0.7,
        // transparent:true,
        // wireframe:true,
        specular: 0x4488ee,
        shininess: 12,
      }); //材质对象Material
      this.mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      this.meshCar = new THREE.Mesh(geometryCar, material);
      this.meshCar.position.set(25, 0, 0);
      // this.scene.add(this.mesh); //网格模型添加到场景中
      // this.scene.add(this.meshCar);

      /**
       * 创建地板
       */
      const planeGeometry = new THREE.PlaneGeometry(800, 800);
      const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
      this.planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      this.planeMesh.rotation.x = -0.5 * Math.PI;
      this.planeMesh.position.x = 0;
      this.planeMesh.position.y = 0;
      this.planeMesh.position.z = 0;
      this.scene.add(this.planeMesh);

      /**
       * 光源设置
       */
      //点光源
      const point = new THREE.PointLight(0xffffff);
      point.position.set(0, 10000, 0); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      //环境光
      const ambient = new THREE.AmbientLight(0x00ff44);
      this.scene.add(ambient);
      // console.log(scene)
      // console.log(scene.children)
      /**
       * 相机设置
       */
      const width = this.width; //窗口宽度
      const height = this.height; //窗口高度
      const k = width / height; //窗口宽高比
      const s = 15; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

      this.camera.position.set(0, 100, 0); //设置相机位置

      // const origrot = new THREE.Euler(0, 1, 3.14, 'XYZ');

      // this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
      console.log(this.camera);
      console.log(this.camera.rotation.z);

      /**
       * 创建渲染器对象
       */
      // 插入形状线条几何对象
      const geometry333 = new THREE.Geometry();
      geometry333.vertices.push(new THREE.Vector3(-10, 1, 0));
      geometry333.vertices.push(new THREE.Vector3(10, 1, 0));
      geometry333.vertices.push(new THREE.Vector3(10, 1, 10));
      geometry333.vertices.push(new THREE.Vector3(-10, 1, 10));

      const material333 = new THREE.LineBasicMaterial({
        // lineWidth: 20,//无效
        color: 0xffffff, //线段的颜色
      });
      const geometry33 = new THREE.Geometry();
      geometry33.vertices.push(
        new THREE.Vector3(-20, 1, 0),
        new THREE.Vector3(20, 1, 0),
        new THREE.Vector3(20, 1, 20),
        new THREE.Vector3(-20, 1, 20),
      );

      const material33 = new THREE.LineBasicMaterial({
        // side: THREE.DoubleSide,
        // lineWidth: 20,//无效
        color: 0xff0000, //线段的颜色
      });
      const line2 = new THREE.LineLoop(geometry33, material33);
      const line = new THREE.LineLoop(geometry333, material333);
      this.scene.add(line);
      this.scene.add(line2);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height); //设置渲染区域尺寸
      this.renderer.setClearColor(0x000000, 1); //设置背景颜色
      const content = document.getElementById('container');
      console.log(content);
      content.appendChild(this.renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数
      this.controls = new OrbitControls(this.camera, this.renderer.domElement); //创建控件对象
      // this.controls.target = new THREE.Vector3(0, -100, 0);
      this.camera.rotation.z = 3.14;
      console.log(123);
      // 控制鼠标Y轴角度在0 到90度
      this.controls.minPolarAngle = Math.PI * 0.005; // radians
      this.controls.maxPolarAngle = Math.PI * 0.45; // radians
      // this.controls.addEventListener('change', this.render);
      // renderer.render(scene, camera);

      // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
      // const axisHelper = new THREE.AxisHelper(250);
      // this.scene.add(axisHelper);
    },
    addGrass() {
      const loader = new THREE.TextureLoader();
      const texture = loader.load('/static/grasslight-big.jpg');
      console.log(texture);
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(0.01, 0.01);
      texture.anisotropy = 16;
      texture.encoding = THREE.sRGBEncoding;
      this.GRASS_LIGHT_MATERIAL = new THREE.MeshLambertMaterial({ map: texture });
      console.log(this.GRASS_LIGHT_MATERIAL);

      //  const texture = loader.load('grasslight-big.jpg');
      //   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      //   texture.repeat.set(1, 1);
      //   texture.anisotropy = 16;
      //   texture.encoding = THREE.sRGBEncoding;
      //   this.GRASS_LIGHT_MATERIAL2 = new THREE.MeshLambertMaterial({ map: texture });
    },
    addtt() {
      let list2 = [], // 用来装点位的数组
        mnX = 250,
        mxX = -250,
        mnY = 190,
        mxY = -190;
      list2.push(new THREE.Vector2(mnX, mnY));
      list2.push(new THREE.Vector2(mxX, mnY));
      list2.push(new THREE.Vector2(mxX, mxY));
      list2.push(new THREE.Vector2(mnX, mxY));
      const baseGroundGeometry = new THREE.ShapeGeometry(new THREE.Shape(list2));
      const baseGroundMesh = new THREE.Mesh(baseGroundGeometry, this.GRASS_LIGHT_MATERIAL);
      baseGroundMesh.rotation.x = -0.5 * Math.PI;
      baseGroundMesh.position.y = 0.5;

      this.scene.add(baseGroundMesh);
    },

    render() {
      this.renderer.render(this.scene, this.camera); //执行渲染操作
      this.step += 0.04;
      this.mesh.position.y = 20 + 10 * Math.cos(this.step);
      this.mesh.rotateY(-0.01); //每次绕y轴旋转0.01弧度
      requestAnimationFrame(this.render); //请求再次执行渲染函数render
    },
  },
  mounted() {
    this.init();
    this.addGrass();
    this.addtt();
    this.render();
  },
};
</script>
<style scoped>
#container {
  height: 400px;
}
</style>
