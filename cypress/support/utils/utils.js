export function removeCurrencyAndCleanPrice(price) {
    return price.replace(/[$USD, ']/g,'')
}