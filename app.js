//toggle the notification box
const notification_btn = document.querySelector('.bell-icon');
const notification_box = document.querySelector(".notification-box");

notification_btn.addEventListener("click", () => {
       notification_box.classList.toggle('active');
})

//add press toggle on search bar
const search_bar = document.querySelector('.search-bar')
search_bar.addEventListener("click", () => {
         search_bar.classList.toggle('onpressed');
})

//toggle profile box
const profile_box = document.querySelector('.profile-expansive-box');
const profile_btn = document.querySelector('.profile-wrap-intro');

profile_btn.addEventListener("click", () => {
        profile_box.classList.toggle('active');
})

// remove the plan bar
const plan_bar = document.querySelector('.plan-wrap');
const close_plan_btn = document.querySelector('.close-plan-bar');
close_plan_btn.addEventListener("click", () => {
       plan_bar.style.display = "none" 
})

// toggle arrow switch btns
const toggle_btns = document.querySelectorAll('.tg-setup');

for(let i = 0; i < toggle_btns.length; i ++){
       toggle_btns[i].classList.remove('active')

       toggle_btns[1].classList.add('active');
       toggle_btns[1].addEventListener('click', () => {
             toggle_btns[1].classList.remove('active')
             toggle_btns[0].classList.add('active')
       })

       toggle_btns[0].addEventListener('click', () => {
            toggle_btns[0].classList.remove('active')
            toggle_btns[1].classList.add('active')
       })
}