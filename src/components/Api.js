class Callapi{
    
    apiCalling(obj)
    {
        return new Promise((resolve,reject) => 
        {
               fetch("https://api.cloud.altbalaji.com/accounts/login",
               {
                   method:'POST',
                   headers:
                   {
                    "Content-Type": "application/json"
                   },
                   body:JSON.stringify(obj)
               }).then(res => res.json())
               .then(Response => 
                {
                   if(Response.status === 'ok')
                   {
                       resolve(Response);
                   }else{
                       reject(false);
                   }
               })
        })
    }

    getImage()
    {
        return new Promise((resolve) => 
        {
            fetch("https://api.cloud.altbalaji.com/media/series/275/seasons/292/episodes?limit=10&order=asc&domain=in")
            .then(res => res.json())
            .then(res => 
            {
                resolve(res)
            })

        })
    }

}

export { Callapi }
