//mobile api function
class arumarum{
    constructor(){
        this.api = "http://arumarum.com:2080"
        this.headers={"User-Agent":"okhttp/4.11.0"}
    }
    async my_ip(){
        let req=await fetch(`${this.api}/myipaddr`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {arumarum};