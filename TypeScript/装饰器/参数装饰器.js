"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function LogParameter(target, propertyKey, parameterIndex) {
    console.log(`Parameter at index ${parameterIndex} in method ${propertyKey} `);
}
class DemoClass {
    greet(message) {
        console.log(message);
    }
}
__decorate([
    __param(0, LogParameter)
], DemoClass.prototype, "greet", null);
const demoClass = new DemoClass();
demoClass.greet('Hello');
// 输出: Parameter at index 0 in method greet
