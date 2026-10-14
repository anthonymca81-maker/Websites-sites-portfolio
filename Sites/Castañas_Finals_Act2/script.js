const message = document.getElementById("message")
const loadbtn = document.getElementById("loadbtn")
const loadbtn1 = document.getElementById("loadbtn1")
const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedule = document.getElementById("schedule")


function showmessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("checking account...")
        })
    },3000)
}

loadbtn.addEventListener("click", function(){
    message.innerHTML = "Bading..."

    showmessage()

        .then(function(result){
            message.innerHTML = result
            message.style.color = "salmon"
            return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading...")
            },3000)
            })
        })
        .then(function(result){
            message.innerHTML = result
            message.style.color = "blue"
            return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading files...")
            },3000)
            })
        })
        .then(function(result){
            message.innerHTML = result
            message.style.color = "green"
            return new Promise(function(resolve){
            setTimeout(function(){
                resolve("completing configuration...")
            },3000)
            })
        })
        .then(function(result){
            message.innerHTML = result
            message.style.color = "gold"
            return new Promise(function(resolve){
            setTimeout(function(){
            resolve("finished Loaging files...")
            },3000)
            })
        .then(function(result){
            message.innerHTML = result
            message.style.color = "red"
            })
        })
    })




loadbtn1.addEventListener("click", function(){  
    message.innerHTML = "bading..."
    loadbtn.style.backgroundColor = "violet"
    loadbtn1.style.backgroundColor = "violet"
    

    profile.innerHTML = "PROFILE WAITING..."
    grades.innerHTML = "GRADES WAITING..."
    schedule.innerHTML = "SCHEDULE WAITING..."

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            profile.innerHTML = "Profile ni bading Loading...";
            resolve();
        },2000);
    });
    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            grades.innerHTML = "grades ni badingLoading...";
            resolve();
        },2000);
    });
    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            schedule.innerHTML = "schedule ni badinga Loading...";
            resolve();
        },2000);
    });
    Promise.all([profilePromise, gradesPromise, schedulePromise])

    .then(function(){
        message.innerHTML = "Dashboard"
    });
});
