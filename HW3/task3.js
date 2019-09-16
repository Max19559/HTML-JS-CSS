function onCreate(ev) {
    ev.preventDefault();
   
    var data = JSON.stringify({
        "name": String(document.getElementById("cName").value),
        "age": String(document.getElementById("cAge").value),
        "category": String(document.getElementById("cCategory").value)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
 
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        } 
    });

    xhr.open("POST", "http://localhost:2403/worker");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
   
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {

        if (this.readyState === 4) {
            console.log(this.response);
            var result_read=JSON.parse(this.response);
            var resultTBody=document.createElement('tbody');
            
            result_read.map(function(worker){
                resultTBody.appendChild(parseWorkerDataToTableRow(worker));
            });

            var table=document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody,document.getElementById('rTBody'));
            resultTBody.id='rTBody';
            console.log('success');
        }
    });

    xhr.open("GET", "http://localhost:2403/worker/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function onPrepareUpdate(ev){
    
    ev.preventDefault();
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;

    xhrids.addEventListener("readystatechange", function () {
        
        if (this.readyState === 4) {
            
            var result_prepare=JSON.parse(this.response);
            
            var ids=document.createElement('select');
            ids.className='form-control';
            result_prepare.map(function(worker){
                var id=document.createElement('option');
                id.innerHTML=worker.id;
                ids.appendChild(id);
            });
            
            var form=document.getElementById('uid').parentElement;
            form.replaceChild(ids,document.getElementById('uid'));
            ids.id='uid';
            
        }
    });
   
    xhrids.open("GET", "http://localhost:2403/worker/");
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();

   
    var data = JSON.stringify({
        "name": String(document.getElementById("uName").value),
        "age": String(document.getElementById("uAge").value),
        "category": String(document.getElementById("uCategory").value)
    });
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://localhost:2403/worker/"+document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onDelete(ev) {
    ev.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://localhost:2403/worker/"+document.getElementById("dID").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseWorkerDataToTableRow(result){
    var row=document.createElement('tr');

    wid=document.createElement('td');
    wid.innerText=result.id;
    row.appendChild(wid);

    wname=document.createElement('td');
    wname.innerText=result.name;
    row.appendChild(wname);

    wage=document.createElement('td');
    wage.innerText=result.age;
    row.appendChild(wage);
   
    wcategory=document.createElement('td');
    wcategory.innerText=result.category;
    row.appendChild(wcategory);
    
    return row;
}

(function () {
    document.getElementById('cButton').addEventListener('click', onCreate);
    setTimeout(function(){document.getElementById('read').addEventListener('click', onRead);},600);
    setTimeout(function(){document.getElementById('update').addEventListener('click', onPrepareUpdate);},600);
    document.getElementById('ubutton').addEventListener('click', onUpdate);
    document.getElementById('dButton').addEventListener('click', onDelete);
})()
