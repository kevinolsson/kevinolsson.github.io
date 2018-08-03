// initialize profile button 
var profileButton = document.getElementById('profileButton');
profileButton.addEventListener('click', toggleSidebar);

var profileButton2 = document.getElementById('profileButton2');
profileButton2.addEventListener('click', hideSidebar);

var globalButton = document.getElementById('globalButton');
globalButton.addEventListener('click',toggleGlobal); 

var depositButton = document.getElementById('depositButton'),
depositButton2 = document.getElementById('depositButton2'),
depositButton3 = document.getElementById('depositButton3')
depositButton.addEventListener('click', toggleSidebar);
depositButton2.addEventListener('click', hideSidebar);
depositButton3.addEventListener('click', toggleSidebar);

var activeButton = null;
var depositButton3Clicked = false;

function toggleSidebar(subject) {

    if(depositButton3Clicked) {
        depositButton3Clicked = false;
    }

    let sidebar = document.getElementById('sidebar');
    let wrapper = document.getElementsByClassName('wrapper')[0];
    let grid = document.getElementsByClassName('grid')[0];

        // check if sidebar is already visible.
        // console.log(this.getAttribute('subject'));
    if(sidebar.classList.contains('sidebar--has-sidebar') &&  activeButton.getAttribute('id') != this.getAttribute('id') ) {
    } else {
        sidebar.classList.toggle('sidebar--has-sidebar');
        wrapper.classList.toggle('wrapper--has-sidebar');
        grid.classList.toggle('grid--has-sidebar');
        setWrapperGridTemplateColumns(window.innerWidth);
    }
        
    activeButton = this;

    let profile = document.getElementById('sidebarProfile');
    let deposit = document.getElementById('sidebarDeposit');

    if(this) {
        if(this.id == 'profileButton' || this.id == 'profileButton2') {
            profile.classList.add('sidebar-profile--active');
        } else {
            profile.classList.remove('sidebar-profile--active');
        }

        if(this.id == 'depositButton' || this.id == 'depositButton2' || this.id == 'depositButton3') {
            deposit.classList.add('sidebar-deposit--active');
        } else {
            deposit.classList.remove('sidebar-deposit--active');
        }
    }

    if(this.id == 'depositButton3') {
        depositButton3Clicked = true;
    }


 }


function hideSidebar() {

    let sidebar = document.getElementById('sidebar');
    let wrapper = document.getElementsByClassName('wrapper')[0];
    let grid = document.getElementsByClassName('grid')[0];

    if(depositButton3Clicked && this.id=='depositButton2') {
        
        let profile = document.getElementById('sidebarProfile');
        let deposit = document.getElementById('sidebarDeposit');
        deposit.classList.remove('sidebar-deposit--active');
        profile.classList.add('sidebar-profile--active');

        activeButton = this;
        depositButton3Clicked = false;

    } else {
        sidebar.classList.remove('sidebar--has-sidebar');
        wrapper.classList.remove('wrapper--has-sidebar');
        grid.classList.remove('grid--has-sidebar');
        setWrapperGridTemplateColumns(window.innerWidth);
    }

}