import { getPlaceholderStatusHtml } from "./images/utils";

class Profile{
    constructor(data){
        Object.assign(this, data)
        this.statusHtml = getPlaceholderStatusHtml(this.name)
    }

    getProfileHtml(){
        const { name, avatar, price, bio, statusHtml } = this;

        return `<img id="profile-img" class="--profile-img" src="${avatar}" alt="photo of the ${name}">
            ${statusHtml}
        <h1 id="profile-title" class="--profile-title XXXIIpt semi-bold">${name}, <span>$${price}</span></h1>
        <p id="profile-text" class="--profile-text XXIVpt">${bio}</p>
        <div id="action-buttons" class="--action-buttons">
            <button id="reject-btn" class="--reject-btn btn" data-reject="reject"><img id="reject-icon" class="--reject-icon --action-icon" src="images/nope-icon.png" alt="reject button" data-reject="reject"></button>
            <button id="like-btn" class="--like-btn btn" data-like="like"><img id="like-icon" class="--like-icon --action-icon" src="images/like-icon.png" alt="like button" data-like="like"></button>
        </div>`
    }

    setHasBeenLiked(){
        this.statusHtml = `<img id="profile-like-icon" 
        class="--profile-like-icon --profile--icon" 
        src="images/like-state.png" 
        alt="like icon over ${this.name} photo">`
        this.hasBeenLiked = !this.hasBeenLiked;
        this.setHasBeenSwiped()
    }

    setHasBeenRejected(){
        this.statusHtml = `<img id="profile-reject-icon" 
        class="--profile-reject-icon --profile--icon" 
        src="images/nope-state.png" 
        alt="nope icon over ${this.name} photo">`
        this.setHasBeenSwiped()
    }

    setHasBeenSwiped(){
        this.hasBeenSwiped = !this.hasBeenSwiped;
    }
}

export default Profile;