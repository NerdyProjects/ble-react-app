import { BleManager } from 'react-native-ble-plx'

let manager
let scanCb

export function init(scanCallback) {
  manager = new BleManager()
  scanCb = scanCallback
}

export function triggerScan () {
  manager.startDeviceScan(null, null, function (err, res) {
    if(err) {
      triggerScan()
    }
    if(res) {
      if(scanCb) {
        scanCb(res)
      }
    }
  })
}

export function stopScan () {
  manager.stopDeviceScan()
}