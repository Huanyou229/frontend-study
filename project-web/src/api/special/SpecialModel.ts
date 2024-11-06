//定义专题数据类型
export type Special = {
    id: string;
    title: string;
    banner: string;
    introduction: string;
    isFollowing: boolean;
    followersCount: number;
    viewCount: number;
};

//列表查询参数
export type SpecialListParm = {
    currentPage: number;
    pageSize: number;
    title: string;
    total: number;
}