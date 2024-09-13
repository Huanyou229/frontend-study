// 这个声明⽂件告诉 TypeScript，所有 .vue ⽂件都是 Vue 组件
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}