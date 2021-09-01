<template>
  <div>
    <div id="container"></div>
    <el-button type="warning" @click="notice">双击产生起始位置或者终止位置</el-button>
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
      default: 1080,
    },
    height: {
      type: Number,
      default: 700,
    },
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,

      controls: null,
      meshCar: null,
      planeMesh: null,
      step: 0,

      // 表格参数
      length: 400, // 宽
      flex: 4, // 随即物体密度
      isCaculate: false,
      resultArray: [], // 存放小球的位置
    };
  },

  methods: {
    rayClick(e) {
      const length = this.length;
      const raycaster = new THREE.Raycaster();
      let mouse = new THREE.Vector2();

      const fxl = new THREE.Vector3(0, 1, 0);
      const groundplane = new THREE.Plane(fxl, 0);

      mouse.x = (e.clientX / this.width) * 2 - 1;
      mouse.y = -(e.clientY / this.height) * 2 + 1;
      console.log('mouse', mouse);
      raycaster.setFromCamera(mouse, this.camera);
      const ray = raycaster.ray;
      let intersects = ray.intersectPlane(groundplane);
      let x = intersects.x;
      let z = intersects.z;
      console.log(x, z);
      if (Math.abs(x) > length / 2 || Math.abs(z) > length / 2) {
        console.log(123);
        return;
      }
      // 确定黄球中心位置
      let k, m;
      for (let i = -length / 2; i < length / 2; i += 10) {
        if (x >= i && x < i + 10) {
          k = i + 5;
        }
      }
      for (let j = -length / 2; j < length / 2; j += 10) {
        if (z >= j && z < j + 10) {
          m = j + 5;
        }
      }
      // 放置小球
      this.initSphere(k, m);
    },
    cleanSphere() {
      let child = this.scene.children;
      for (let i = 0; i < child.length; i++) {
        if (child[i].geometry instanceof THREE.SphereGeometry) {
          this.scene.remove(child[i]);
          i--;
        }
      }
      this.isCaculate = false;
    },

    initSphere(x, z) {
      const resultArray = this.resultArray;
      if (this.isCaculate) {
        this.cleanSphere();
      }
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

      if (resultArray.length === 0) {
        var sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = x;
        sphere.position.y = 5;
        sphere.position.z = z;
        resultArray.push(sphere);
        this.scene.add(sphere);
      } else if (resultArray[0].position.x != x && resultArray[0].position.z != z) {
        var sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = x;
        sphere.position.y = 5;
        sphere.position.z = z;
        resultArray.push(sphere);
        this.scene.add(sphere);
        this.isCaculate = true;
        console.log('起始点坐标为  x:' + resultArray[0].position.x + ',z:' + resultArray[0].position.z);
        console.log('终止点坐标为  x:' + resultArray[1].position.x + ',z:' + resultArray[1].position.z);
        // resultArray = new Array();
        this.resultArray = [];
      }
    },
    createObjs() {
      const length = this.length;
      const flex = this.flex;
      const geometry = new THREE.CubeGeometry(8, 8, 8);
      const material = new THREE.MeshBasicMaterial({ color: 0xc0c0c0 });
      for (let i = 0; i < length / 10; i++) {
        for (let j = 0; j < length / 10; j++) {
          const salt = Math.floor(Math.random() * 10 + 1);
          if (salt <= flex) {
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(10 * j - length / 2 + 5, 5, 10 * i - length / 2 + 5);
            this.scene.add(cube);
          }
        }
      }
    },
    createWall() {
      const length = this.length;
      const geometry = new THREE.PlaneGeometry(length, 10);
      const material = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
      const planeS = new THREE.Mesh(geometry, material);
      planeS.position.set(0, 5, length / 2);
      this.scene.add(planeS);

      const planeE = new THREE.Mesh(geometry, material);
      planeE.rotation.y = (90 * Math.PI) / 180;
      planeE.position.set(length / 2, 5, 0);
      this.scene.add(planeE);

      const planeN = new THREE.Mesh(geometry, material);
      planeN.position.set(0, 5, -length / 2);
      this.scene.add(planeN);

      const planeA = new THREE.Mesh(geometry, material);
      planeA.rotation.y = (90 * Math.PI) / 180;
      planeA.position.set(-length / 2, 5, 0);
      this.scene.add(planeA);
    },
    createNet() {
      const length = this.length;
      const geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(-length / 2, 0, 0));
      geometry.vertices.push(new THREE.Vector3(length / 2, 0, 0));

      for (let i = 0; i <= length / 10; i++) {
        const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x808080, opacity: 1 }));
        line.position.z = i * 10 - length / 2;
        this.scene.add(line);

        const line2 = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x808080, opacity: 1 }));
        line2.position.x = i * 10 - length / 2;
        line2.rotation.y = (90 * Math.PI) / 180;
        this.scene.add(line2);
      }
    },
    init: function() {
      /**
       * 创建场景对象Scene
       */
      this.scene = new THREE.Scene();
      /**
       * 创建网格模型
       */

      /**
       * 创建网格(网格、墙体)
       */
      this.createNet();

      this.createWall();

      /**
       * 创建随机物体
       */
      this.createObjs();
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
      const s = 500; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象 正交相机
      // this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);

      this.camera = new THREE.PerspectiveCamera(45, k, 0.1, 20000);
      this.camera.position.set(0, 200, 250); //设置相机位置
      this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height); //设置渲染区域尺寸
      this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
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
      requestAnimationFrame(this.render); //请求再次执行渲染函数render
    },
    notice() {
      this.$notify({
        title: '提示',
        message: '双击产生起始位置或者终止位置,点到场景外不生效，场景不加A*算法循迹',
        duration: 0,
      });
    },
  },
  mounted() {
    this.init();
    this.render();

    document.addEventListener('dblclick', this.rayClick, false);
    this.notice();
  },
};
</script>
<style scoped></style>
