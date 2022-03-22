
document.addEventListener("DOMContentLoaded",function(){
    let audio = document.querySelector(".audio")
    let body = document.querySelector(".body")
    let title = document.querySelector(".title")
    let span = document.querySelector(".text")
    let table = {}

   
    // ^\[[0-9]+:[0-9]+\.[0-9]+\](.*)$ *Regex2 V3
    // ([a-z A-Z\s,()']+) * Regex2 V1
    // * \[(\d{2}):(\d{2}).(\d{2})] * Regex
    fetch("paroles.txt").then(function (response) {

        response.text().then(function (text) {
            const Regex = /(\d{2})\:(\d{2})\.(\d{2})/
            const Regex2 = /^\[[0-9]+:[0-9]+\.[0-9]+\](.*)$/
            const lyric = text.split(/\n/)
            // console.log(lyric)
            for (const line of lyric) {
                // console.log(line)
                let time = line.match(Regex)
                // console.log(time)
                let second = parseInt(time[1]) * 60 + parseInt(time[2])
                // console.log(second)
                let text = line.match(Regex2)
                // console.log(text)

                    table[second] = text[1]
                
            }

            audio.addEventListener("timeupdate", function () {
            //    console.log(Math.floor(audio.currentTime))
            
                // console.log(table)
            
            
               for (const second in table) {
                //    console.log(Math.floor(audio.currentTime))
                    // console.log(table[second])
                   if (second == Math.ceil(audio.currentTime)) {
                        document.querySelector(".text").innerHTML = table[second];
                   }
               }
               
            })
        })
    })


    

    










})