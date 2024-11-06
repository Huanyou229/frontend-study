import http from "@/http"
import {Special,SpecialListParm} from "./SpecialModel"

// 新增
export const addApi=(parm:Special)=>{
    return http.post("/api/special",parm);
};


//专题列表
export const getListApi=(parm:SpecialListParm)=>{
return http.post("/api/special/getList", parm);
};
//编辑
export const editApi=(parm:Special)=>{
return http.put("/api/special", parm);
};
//删除
export const deleteApi=(id:string)=>{
return http.delete(`/api/special/${id}`);
};