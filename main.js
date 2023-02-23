import './style.css'
import Locations from './data'
import Profile from './Profile'


const locationArray = ["canyon", "rushmore", "liberty"]
let isWaiting = false;

function getNewProfile(){
    const nextProfileData = Locations[locationArray.shift()]
    return nextProfileData ? new Profile(nextProfileData) : ''
}

function render(){
    if(profile){
        document.getElementById('profile').innerHTML = profile.getProfileHtml()
    } else {
        document.getElementById('main-content').innerHTML = `<div id="no-profile" class="--no-profile">
            <img id="no-profile-img" class="--no-profile-img" src="images/no-matches.jpg" alt="empty jar"/>
            <p id="no-profile-emoji" class="--no-profile-emoji text-center">🏠</p>
            <p id="no-profile-text" class="--no-profile-text text-center">Sorry, no matches at this time</p>
        </div>`
    }
    
}

document.addEventListener('click', (e)=>{
    if(!isWaiting){
        isWaiting = true;
        if(e.target.dataset.reject){
            profile.setHasBeenRejected()
            render()
            setTimeout(()=>{
               profile =  getNewProfile()
               render()
               isWaiting = false;
            }, 3000)
            
        } else if(e.target.dataset.like){
            profile.setHasBeenLiked()
            render()
            setTimeout(()=>{
                profile =  getNewProfile()
                render()
                isWaiting = false;
             }, 3000)
             
        }
    }
    
})

let profile = getNewProfile()
render()