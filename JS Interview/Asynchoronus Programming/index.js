let searchInput=document.querySelector(".searchInput")
let container=document.querySelector(".container")
let btn=document.querySelector(".btn")




btn.addEventListener("click",()=>{
    let result=searchInput.value
   
    let weatherResult=async()=>{
        let api=await fetch(`http://api.weatherapi.com/v1/current.json?key=79af0f1ab8e94207a00144528252007&q=${result}&aqi=yes`)

        let data=await api.json()
        console.log(data);
        
    }

    weatherResult()


    
    
})