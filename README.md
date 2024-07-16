# arumarum
JavaScript library for arumarum.com
# main
```js
async function main(){
    const {arumarum} = require('./arumarum');
    const ip= new arumarum();
    let req=await ip.my_ip()
    console.log(req)
}
main()
```
