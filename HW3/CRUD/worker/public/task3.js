$(document).ready(function() {

    
    $('#createForm').submit(function(e) {

        e.preventDefault();

        var name = $('#cName').val();
        var age = $('#cAge').val();
        var category = $('#cCategory').val();

        dpd.worker.post({
            name: name,
            age: age,
            category: category
        });

        $('#cName').val("");
        $('#cAge').val("");
        $('#cCategory').val("");
       
        
        return false;
    });

    $('#deleteForm').submit(function(e) {

        e.preventDefault();
        dpd.worker.del($("#dID").val(), function (err) {
            if(err) console.log(err);
          });      
    });


    $("#read").click( function() {

        
        
        dpd.worker.get(function (result, err) {

            var resultTBody=document.createElement('tbody');
            
            result.map(function(worker){
                
                resultTBody.appendChild(parseWorkerDataToTableRow(worker));
                
            });
            var table=document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody,document.getElementById('rTBody'));
            resultTBody.id='rTBody';
           
            if(err) console.log(err);
          });  
          
          function parseWorkerDataToTableRow(result){
            var row=document.createElement('tr');
            
            var id=document.createElement('td');
            id.innerText=result.id;
            row.appendChild(id);

            var nameW=document.createElement('td');
            nameW.innerText=result.name;
            row.appendChild(nameW);
            
           
            var ageW=document.createElement('td');
            ageW.innerText=result.age;
            row.appendChild(ageW);
            
            var categoryW=document.createElement('td');
            categoryW.innerText=result.category;
            row.appendChild(categoryW);
            
            return row;
        }

    });

    

    $("#update").click( function() {


        dpd.worker.get(function (result, err) {
            var ids=document.createElement('select');
            ids.className='form-control';
            result.map(function(worker){
                var id=document.createElement('option');
                id.innerHTML=worker.id;
                ids.appendChild(id);
            });
            var form=document.getElementById('uid').parentElement;
            form.replaceChild(ids,document.getElementById('uid'));
            ids.id='uid';
            


            $("#uid").change( function(){
                dpd.worker.get($(this).val(), function(worker){
                    $('#uName').val(worker.name);
                    $('#uAge').val(worker.age);
                    $('#uCategory').val(worker.category);
                });
            });
            

            $("#updateForm").submit(function(e){

                e.preventDefault();

                dpd.worker.put($("#uid").val(), 
                                {"name":$('#uName').val(),
                                 "age":$('#uAge').val(),
                                 "category":$('#uCategory').val()}, function(result, err) {
                if(err) return console.log(err);
                });
            });
           
            if(err) console.log(err);
        
        })
    });

   
});
