import Sortable from "sortablejs";

const initSortable = (ref: any) => {
  // 获取表格row的父节点
  const ele = ref.$el.querySelector(
    ".el-table__body > tbody"
  );
  // 创建拖拽实例
  const dragTable = new Sortable(ele, {
    animation: 150, //动画
    // handle: ".move", //指定拖拽目标，点击此目标才可拖拽元素(此例中设置操作按钮拖拽)
    // filter: ".disabled", //指定不可拖动的类名（el-table中可通过row-class-name设置行的class）
    // dragClass: "dragClass", //设置拖拽样式类名
    // ghostClass: "ghostClass", //设置拖拽停靠样式类名
    // chosenClass: "chosenClass", //设置选中样式类名

    // 开始拖动事件
    onStart: () => {
      // console.log("开始拖动");
    },
    // 结束拖动事件
    onEnd: ({ newIndex, oldIndex }: any) => {
      // console.log(
      //   "结束拖动",
      //   `拖动前索引${oldIndex}---拖动后索引${newIndex}`
      // );
      const item1 = ref.data[oldIndex]
      ref.data.splice(oldIndex, 1);
      ref.data.splice(newIndex, 0, item1);
    },
  });
  // 将拖拽过后的数据return出去
  return ref.data
}

// 设置表格row的class
const tableRowClassName = (row: any) => {
  if (row.disabled) {
    return "disabled";
  }
  return "";
}

export {
  initSortable,
  tableRowClassName
}