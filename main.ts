basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    basic.showNumber(dht11_dht22.readData(dataType.temperature))
})
