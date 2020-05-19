let root = document.documentElement;
let mode = 0;

document.getElementById("modeSwitch").addEventListener("click",e => {
    if(mode == 0) {
        root.style.setProperty('--background','var(--dBackground)');
        root.style.setProperty('--boxBackground','var(--dBoxBackground');
        root.style.setProperty('--textColor','var(--dTextColor');
        root.style.setProperty('--btnColor', 'var(--dBtnColor');
        document.getElementById('modeSwitch').innerText = "Light Mode";
        mode = 1;
    } else {
        root.style.setProperty('--background','var(--lBackground)');
        root.style.setProperty('--boxBackground','var(--lBoxBackground');
        root.style.setProperty('--textColor','var(--lTextColor');
        root.style.setProperty('--btnColor', 'var(--lBtnColor');
        document.getElementById('modeSwitch').innerText = "Dark Mode";
        mode = 0;
    }
})