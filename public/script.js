const xblBtn = document.querySelector('#xbl');
const psnBtn = document.querySelector('#psn');
const pcBtn = document.querySelector('#pc');
const searchInput = document.querySelector('#searchBar');

let platform = "";
let username = "";

//XBOX BUTTON
xblBtn.addEventListener('click', () => {
    platform = "xbl";

    styles(xblBtn);
});
//PLAYSTATION BUTTON
psnBtn.addEventListener('click', () => {
    platform = "psn";

    styles(psnBtn);
});
//PC BUTTON
pcBtn.addEventListener('click', () => {
    platform = "origin";

    styles(pcBtn);
});
//SEARCH FIELD
searchInput.addEventListener('search', () => {
    username = searchInput.value;
    console.log(`The username you entered was ${searchInput.value} on ${platform}`);

    // if (platform != null && username != null)
    location.href = `/profile/${platform}/${username}`
});








function styles(platform) {
    const xblBtn = document.querySelector('#xbl');
    const psnBtn = document.querySelector('#psn');
    const pcBtn = document.querySelector('#pc');

    if (platform === xblBtn) {
        //APPLY STYLES
        xblBtn.style.backgroundColor = "Green";
        xblBtn.style.width = "75px";
        xblBtn.style.backgroundImage = "url(images/xbox-grey.png)"

        //UNDO STYLES
        //xbox
        // xblBtn.removeEventListener('mouseover', xboxHoverOn);
        // xblBtn.removeEventListener('mouseout', xboxHoverOff);
        //playstation
        psnBtn.style.backgroundColor = "Grey";
        psnBtn.style.width = "50px";
        psnBtn.style.backgroundImage = "url(images/ps-black.png)"
        //pc
        pcBtn.style.backgroundColor = "Grey";
        pcBtn.style.width = "50px";
        pcBtn.style.backgroundImage = "url(images/pc-black.png)"


        // psnBtn.addEventListener('mouseover', psHoverOn);
        // psnBtn.addEventListener('mouseout', psHoverOff);

        // pcBtn.addEventListener('mouseover', pcHoverOn);
        // pcBtn.addEventListener('mouseout', pcHoverOff);
    }

    if (platform === psnBtn) {
        //APPLY STYLES
        psnBtn.style.backgroundColor = "Blue";
        psnBtn.style.width = "75px";
        psnBtn.style.backgroundImage = "url(images/ps-grey.png)"

        //UNDO STYLES
        //playstation
        // psnBtn.removeEventListener('mouseover', psHoverOn);
        // psnBtn.removeEventListener('mouseout', psHoverOff);
        //xbox
        xblBtn.style.backgroundColor = "Grey";
        xblBtn.style.width = "50px";
        xblBtn.style.backgroundImage = "url(images/xbox-black.png)"
        //pc
        pcBtn.style.backgroundColor = "Grey";
        pcBtn.style.width = "50px";
        pcBtn.style.backgroundImage = "url(images/pc-black.png)"


        // xblBtn.addEventListener('mouseover', xboxHoverOn);
        // xblBtn.addEventListener('mouseout', xboxHoverOff);

        // pcBtn.addEventListener('mouseover', pcHoverOn);
        // pcBtn.addEventListener('mouseout', pcHoverOff);
    }

    if (platform === pcBtn) {
        //APPLY STYLES
        pcBtn.style.backgroundColor = "Orange";
        pcBtn.style.width = "75px";
        pcBtn.style.backgroundImage = "url(images/pc-grey.png)"

        //UNDO STYLES
        //xbox
        xblBtn.style.backgroundColor = "Grey";
        xblBtn.style.width = "50px";
        xblBtn.style.backgroundImage = "url(images/xbox-black.png)"
        //playstation
        psnBtn.style.backgroundColor = "Grey";
        psnBtn.style.width = "50px";
        psnBtn.style.backgroundImage = "url(images/ps-black.png)"


        // xblBtn.addEventListener('mouseover', xboxHoverOn);
        // xblBtn.addEventListener('mouseout', xboxHoverOff);

        // pcBtn.addEventListener('mouseover', pcHoverOn);
        // pcBtn.addEventListener('mouseout', pcHoverOff);
    }
}