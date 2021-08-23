module.exports = function(plop) {
  // create your generators here
  plop.setGenerator('addOrEdit', {
    description: '这个是生成新增&编辑表单的',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '新增&编辑表单文件的名字，默认addOrEdit 如默认请回车',
        default: 'addOrEdit',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'plop/{{name}}.vue',
        templateFile: 'template_model/addOrEdit.vue',
      },
    ], // array of actions
  });
  plop.setGenerator('table', {
    description: '这个是生成基本列表查询的',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '基础列表文件名字，默认index 如默认请回车',
        default: 'index',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'plop/{{name}}.vue',
        templateFile: 'template_model/index.vue',
      },
    ], // array of actions
  });
};
