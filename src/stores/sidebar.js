import { ref, computed } from "vue";
export const useSidebar = () => {
// 父項目數據
const parents = ref([]);
// 請求父項目
const fetchParents = async () => {
  try {
    const res = await fetch("http://localhost:3300/sidebar/parents");
    const data = await res.json();
    parents.value = data.map((parent) => ({
      ...parent,
      showChildren: false, // 是否顯示子項目
      children: [], // 子項目
      hasChildren: parent.hasChildren, // 是否有子項目，從後端返回
    }));
  } catch (error) {
    console.error("請求父項目失敗：", error);
  }
};
// 根據選擇的父項目顯示子項目
const loadChildren = async (parentId) => {
  try {
    const res = await fetch(
      `http://localhost:3300/sidebar/children?parent_id=${parentId}`
    );
    const data = await res.json();
    const parent = parents.value.find((p) => p.categories_id === parentId);
    if (parent) {
      parent.children = data; // 加載子項目數據
      parent.showChildren = true; // 顯示子項目
    }
  } catch (error) {
    console.error("請求子項目失敗：", error);
  }
};

// 切換子項目的顯示與隱藏
const toggleChildren = (parentId) => {
  const parent = parents.value.find((p) => p.categories_id === parentId);
  if (parent) {
    // 僅在有子項目的情況下切換顯示
    if (parent.hasChildren) {
      if (!parent.showChildren && parent.children.length === 0) {
        loadChildren(parentId); // 首次加載子項目
      } else {
        parent.showChildren = !parent.showChildren; // 切換顯示狀態
      }
    }
  }
};
return {
    parents,
    fetchParents,
    loadChildren,
    toggleChildren,
  };
}
