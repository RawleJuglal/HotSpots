const getPlaceholderStatusHtml = name => {
    return `<img id="profile-placeholder-icon" 
        class="--placeholder-profile-icon --profile--icon" 
        src="images/placeholder-state.png" 
        alt="empty placeholder over ${name} photo">`
}

export { getPlaceholderStatusHtml }