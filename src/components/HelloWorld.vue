 <template>
    <div>
      <div id="container"></div>
    </div>
</template>
 
<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls:null,
      meshCar:null,
      planeMesh:null
    }
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
    const geometryCar= new THREE.CylinderGeometry(50,50,100,25)
    const geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    const material = new THREE.MeshLambertMaterial({
      color: 0x0000ff,
      opacity:0.7,
      // transparent:true,
      // wireframe:true,
      specular:0x4488ee,
      shininess:12
    }); //材质对象Material
    this.mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    this.meshCar=new THREE.Mesh(geometryCar,material)
    this.meshCar.position.set(250,0,0)
    this.scene.add(this.mesh); //网格模型添加到场景中
    this.scene.add(this.meshCar); 

    /**
     * 创建地板
     */
    const planeGeometry=new THREE.PlaneGeometry(800,300)
    const planeMaterial= new THREE.MeshBasicMaterial({color:0xcccccc  })
    this.planeMesh=new THREE.Mesh(planeGeometry,planeMaterial)
    this.planeMesh.rotation.x=-0.5* Math.PI
    this.planeMesh.position.x=150
    this.planeMesh.position.y=0
    this.planeMesh.position.z=0
    this.scene.add(this.planeMesh)


    /**
     * 光源设置
     */
    //点光源
    const point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    this.scene.add(point); //点光源添加到场景中
     //环境光
    const ambient = new THREE.AmbientLight(0x444444);
    this.scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    const width = window.innerWidth; //窗口宽度
    const height = window.innerHeight; //窗口高度
    const k = width / height; //窗口宽高比
    const s = 500; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    this.camera.position.set(200, 300, 200); //设置相机位置
    this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);//设置渲染区域尺寸
    this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.body.appendChild(this.renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    this.controls = new OrbitControls(this.camera,this.renderer.domElement);//创建控件对象
    // this.controls.addEventListener('change', this.render);
    // renderer.render(scene, camera);

    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    const axisHelper = new THREE.AxisHelper(250);
    this.scene.add(axisHelper);
    },
    render() {
        this.renderer.render(this.scene,this.camera);//执行渲染操作
        this.mesh.rotateY(-0.01);//每次绕y轴旋转0.01弧度
        requestAnimationFrame(this.render);//请求再次执行渲染函数render
        
    }
  },
  mounted() {
      this.init();
      this.render()
  }
}
</script>
<style scoped>
  #container {
    height: 400px;
  }
</style>