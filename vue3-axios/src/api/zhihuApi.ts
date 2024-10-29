// 封装了对知乎热榜数据的各种请求操作
import api from "./axiosInstance";
import type { HotItem } from "../types/zhihu";

// 获取数据
export const fetchHotList = api.get<{ data: HotItem[] }>('/hot');

// 添加数据  Partial 是一个内置的泛型工具类型，Partial<T>中的T代表原始类型
export const addHotItem = (item: Partial<HotItem>) => api.post('/hot', item);

// 更新数据
export const updateHotItem = (id: number, updatedItem: Partial<HotItem>) =>
    api.put(`/hot/${id}`, updatedItem);

// 删除数据
export const deleteHotItem = (id: number) => api.delete(`/hot/${id}`);