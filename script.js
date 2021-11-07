const form = document.getElementById("draw-form");
const formInput = document.getElementById("bond-numbers");
const loadedBonds = document.querySelector(".loaded-bonds");

function loadBond(){
    formInput.value = myBonds.join(",");
    loadedBonds.innerHTML = null;
    myBonds.forEach(bond => {
        const div = document.createElement("div");
        div.classList.add("bond");
        div.innerHTML = `<h2>${bond}</h2>`;
        loadedBonds.appendChild(div);
    });
}
function search(){
    if(formInput.value !== ""){
        form.submit();
    }
}
function addBond(){

}