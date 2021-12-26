import { defineStore } from 'pinia';
import { store } from '@/store';

interface SettingState {
    currentRouter: any,
    topNavRoutes: any[],
    windowSize: {
      clientWidth: number,
      clientHeight: number
    }
}
/**
 * currentRouter 当前路由信息
 * topNavRoutes 头部导航路由列表
*/
export const globalStore = defineStore({
  id: 'global',
  state: (): SettingState => ({
    currentRouter: {},
    topNavRoutes: [],
    windowSize: {
      clientWidth: 0,
      clientHeight: 0,
    }
  }),
  getters: {
    getCurrentRouter(): any {
        return this.currentRouter
    },
    getTopNavRoutes(): any {
      return this.topNavRoutes
  },
  },
  actions: {
    setCurrentRouter(info: any){
        this.currentRouter = info;
    },
    setTopNavRoutes(info: any[]){
        this.topNavRoutes = info;
    },
    setWindowSize(info: any){
        this.windowSize = info;
    }
  },
});

export function useUserStoreWithOut() {
  return globalStore(store);
}