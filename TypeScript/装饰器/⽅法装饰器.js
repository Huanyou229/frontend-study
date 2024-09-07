"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogExecutionTime(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Executing ${propertyKey}...`);
        return originalMethod.apply(this, args);
    };
}
class MyService {
    doSomething() {
        console.log('Doing something');
    }
}
__decorate([
    LogExecutionTime
], MyService.prototype, "doSomething", null);
const service = new MyService();
service.doSomething();
// 输出:
// Executing doSomething...
// Doing something
