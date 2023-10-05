const api_url = "http://localhost:3000/list";
async function getAllDepartments(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log('data= ',data) ;
    if(!response) {
        document.getElementById('nav-link-department').style.display = 'none';
    }
    show(data);
}
function show(data){
    var ul = document.createElement('ul');
    ul.className="list-inline";
    for(i=0;i<data.length;i++)
    {
        var li = document.createElement('li');
        li.className="list-inline-item";
        li.innerHTML = data[i].ename;
        ul.appendChild(li);
    
    }
    document.getElementById('nav-link-department').appendChild(ul);
}
getAllDepartments(api_url);