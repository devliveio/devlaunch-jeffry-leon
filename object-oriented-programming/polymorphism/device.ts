class Device {
    connect(){
        console.log("Connecting to device")
}}
class Smartphone extends Device {
    connect() {
        console.log("Connecting via Bluetooth")
}}
class Laptop extends Device {
    connect() {
        console.log("Connecting via Wi-Fi")
}}
class Smartwatch extends Device {
    connect() {
        console.log ("Connecting via NFC")
}}
class DeviceFactory {
    createDevice(deviceType: string): Device {
      switch (deviceType) {
        case "smartphone":
          return new Smartphone()
        case "laptop":
          return new Laptop()
        case "smartwatch":
          return new Smartwatch()
        default:
          throw new Error("Invalid device type")
}}}
class FactoryCreation extends DeviceFactory {
    deviceType: string
    constructor(deviceType: string) {
      super()
      this.deviceType = deviceType
}
  
    createAndConnectDevice(): void {
      const device = this.createDevice(this.deviceType)
      device.connect()
}}
const factory = new FactoryCreation("Smartphone")
factory.createAndConnectDevice()




