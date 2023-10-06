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
    for(i=2; i < data.length; i++)
    {
        var li = document.createElement('li');
        li.className="list-inline-item";
        li.innerHTML = data[0].ename;
        ul.appendChild(li);
        li.style.cursor = 'pointer';
        li.addEventListener('click',myFunction);
        function myFunction(){
            document.getElementById("man").innerHTML = "Hello Man";
        } 
        console.log(li.innerHTML)
    }

    for(i=2; i<data.length; i++)
    {
        var li = document.createElement('li');
        li.className="list-inline-item";
        li.innerHTML = data[1].ename;
        ul.appendChild(li);
        li.style.cursor = 'pointer';
        li.addEventListener('click',myFunction);
        function myFunction(){
            document.getElementById("woman").innerHTML = "Hello Woman";
        }  
    }
    
    for(i=2; i<data.length; i++)
    {
        var li = document.createElement('li');
        li.className="list-inline-item";
        li.innerHTML = data[2].ename;
        ul.appendChild(li);
        li.style.cursor = 'pointer';
        li.addEventListener('click',myFunction);
        function myFunction(){
            document.getElementById("accessory").innerHTML = "Accessory";
        }
    }
    document.getElementById('nav-link-department').appendChild(ul);
}
getAllDepartments(api_url);