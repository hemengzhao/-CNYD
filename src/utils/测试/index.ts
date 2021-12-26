// 扁平数据结构转Tree

import user from './index.json';
const arrayToTree = (items: any[]) => {
    const result: any[] = [];   // 存放结果集
    const itemMap: any = {};  // 
    for (const item of items) {
      const id = item.id;
      const pid = item.pId;
  
       if (!itemMap[id]) {
            itemMap[id] = {
               
            }
            if(item.isDepartment){
                itemMap[id].children = []
            }
        }
        itemMap[id] = {
            ...item,
            children: itemMap[id]['children']
        }
      
      const treeItem =  itemMap[id];
     
      if (pid === 0) {
        
        result.push(treeItem);
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            
          }
          if(item.isDepartment){
            itemMap[id].children = []
        }
        }
        itemMap[pid]?.children?.push(treeItem)
      }
  
    }
    // console.log(itemMap, 'itemMap')
    return result;
  
}
console.log(arrayToTree(user))

export {
    arrayToTree
}