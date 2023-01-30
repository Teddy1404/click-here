function know(){
    let a = [
        "         ",
        "Intializing Hack tool",
        "Connecting to your server 1",
        "connection failed",
        "connecting to your server 2",
        "connected succesfully",
        "Username ********",
        "password ********",
        "system MTI no. ********",
        "Trying brute force",
        "200k password tried....",
        "match found instagram ......",
        "account hacked successfully"
    
    ]
    const sleep =async (seconds)=>{
        return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(true)
         }, seconds * 1000);
        })
    }
    const showHack = async(message)=>{
        await sleep(1)
        console.log(message);
        hacks.innerHTML = hacks.innerHTML + message + "<br>"
        
    }
    (async()=>{
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i])
        
    }
    })()
    
}

