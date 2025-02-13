function LogParameter(
    target: any,
    propertyKey: string,
    parameterIndex: number
) {
    console.log(`Parameter at index ${parameterIndex} in method ${propertyKey} `) }
   class DemoClass {
    greet(@LogParameter message: string) {
    console.log(message)
    } }
   const demoClass = new DemoClass()
   demoClass.greet('Hello')
   // 输出: Parameter at index 0 in method greet