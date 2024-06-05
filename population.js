const xhr=new XMLHttpRequest()

xhr.open("Get","https://raw.githubusercontent.com/PugazharasanC/rest-api/main/countriesV3.1.json",true)

xhr.send()

xhr.onload=function popu(){
 var data=JSON.parse(this.response)
 console.log(data)
 const op=data.filter((x)=>{
            return x.population<200000;
    }
 )
console.log(op)
}