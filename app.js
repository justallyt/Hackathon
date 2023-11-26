
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

// toggle arrow switch btns and setup body
const toggle_btns = document.querySelectorAll('.tg-setup');
const setup_body = document.querySelector('.setup-body')

for(let i = 0; i < toggle_btns.length; i ++){
       toggle_btns[i].classList.remove('active')

       toggle_btns[1].classList.add('active');
       toggle_btns[1].addEventListener('click', () => {
             toggle_btns[1].classList.remove('active')
             toggle_btns[0].classList.add('active')
             setup_body.style.display = 'none'
       })

       toggle_btns[0].addEventListener('click', () => {
            toggle_btns[0].classList.remove('active')
            toggle_btns[1].classList.add('active')
            setup_body.style.display = 'block'
       })
}

//switch setup option tabs
const setup_tabs = document.querySelectorAll('.setup-option-moja');
const setup_baits = document.querySelectorAll('.setup-option-moja .text-deets p');

setup_tabs.forEach((item) => {
         setup_tabs[0].classList.add('active');

         let click_bait = item.querySelector('.text-deets p');

         click_bait.addEventListener("click", () => {
                  const currentActive =  document.querySelector('.setup-option-moja.active');
                  if(currentActive && currentActive !== item){
                            currentActive.classList.remove('active')
                  }
                 item.classList.toggle('active')
         })
})

let completed = []
let progress = document.querySelector('.progress-bar span');
let progress_status = document.querySelector('.progress-status .filled');
progress.textContent = `${completed.length}/ ${setup_tabs.length} completed`
progress_status.style.width = `${14.4 * completed.length}px`
/* Mark completion */
const icons = document.querySelectorAll('.icon-actions')

icons.forEach(item => {
        let dotted_icon = item.querySelector('span.dotted')
        let all_icons = item.querySelectorAll('span')
       dotted_icon.addEventListener('mouseover', () => {
                 all_icons[0].style.display = 'none'
                all_icons[1].style.display = 'block'
        })
      dotted_icon.addEventListener('mouseleave', () => {
              all_icons[0].style.display = 'block'
              all_icons[1].style.display = 'none'
       })
       all_icons[1].addEventListener("click", () => {
              all_icons[0].style.display = 'none'
              all_icons[1].style.display = 'none'
              all_icons[2].style.display = 'block'
              setTimeout(() => {
                    all_icons[2].style.display = 'none'
                    all_icons[3].style.display = 'block'
                   
              }, 300)
              completed.push('new')
              progress.textContent = `${completed.length}/ ${setup_tabs.length} completed`
              progress_status.style.width = `${14.4 * completed.length}px`
       })
       all_icons[3].addEventListener('click', () => {
              all_icons[3].style.display = 'none'
              all_icons[2].style.display = 'block'
              setTimeout(() => {
                    all_icons[2].style.display = 'none'
                    all_icons[1].style.display = 'block'
                    setTimeout(() => {
                            all_icons[1].style.display = 'none';
                            all_icons[0].style.display = 'block'
                    }, 200)
              }, 300)
              completed.pop();
              progress.textContent = `${completed.length}/ ${setup_tabs.length} completed`
              progress_status.style.width = `${14.4 * completed.length}px`
       })
})

