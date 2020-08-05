export function flashObjectGreenColor() {
    document.getElementById('objects').style.backgroundColor = "#38c172";
    setInterval(() => {
        document.getElementById('objects').style.backgroundColor = "";
    }, 300);
}

export function flashBodyRedColor() {
    document.body.style.background = "#e3342f";
    setInterval(() => {
        document.body.style.background = "";
    }, 300);
}

export function flashBodyGreenColor() {
    document.body.style.background = "#38c172";
    setInterval(() => {
        document.body.style.background = "";
    }, 300);
}

export function shrinkWrapper() {
    document.getElementById('wrapper').style.transform = "scale(1, 0.1)";
}
export function openWrapper() {
    document.getElementById('wrapper').style.transform = "scale(1)";
}

