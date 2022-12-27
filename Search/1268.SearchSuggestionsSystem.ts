function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort()
    let res = []
    for (let i = 0; i < searchWord.length; i++) {
        let search = searchWord.slice(0, i + 1)
        let temp = products.filter(value => value.slice(0, i + 1) === search);
        res.push(temp.slice(0, 3))
    }
    return res
};

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord = "mouse"

console.log(suggestedProducts(products, searchWord))