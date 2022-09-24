function traerInformacion(){
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
    
}

function pintarRespuesta(items){
    let myTable = "<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha guardado el dato")
        }
    });
    
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"PUT",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha Actualizado")
        }
    });

}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/boat/boat",
        type:"DELETE",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado")   
        }
    });
}

function buscarMessage(){
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(rta){
            mostrarMessage(rta.items)
        }
    });
    
}

function mostrarMessage(items){
    let myTable = "<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarMessage("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#mensaje").append(myTable);
}

function guardarMessage(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#mensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            buscarMessage();
            alert("Se ha guardado el dato")
        }
    });
    
}

function editarMessage(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(rta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            buscarMessage();
            alert("Se ha Actualizado")
        }
    });

}

function borrarMessage(idMessage){
    let myData={
        id:idMessage
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(rta){
            $("#mensaje").empty();
            buscarMessage();
            alert("Se ha Eliminado")   
        }
    });
}


function verCliente(){
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(res){
            console.log(res);
            resCliente(res.items)
        }
    });
    
}

function resCliente(items){
    let myTable = "<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#cliente").append(myTable);
}

function guardarCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(res){
            $("#cliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            verCliente();
            alert("Se ha guardado el dato")
        }
    });
    
}

function editarCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),

    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(res){
            $("#cliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            verCliente();
            alert("Se ha Actualizado")
        }
    });

}

function borrarCliente(idCliente){
    let myData={
        id:idCliente
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax ({
        url:"https://gc55ba98de75d05-x946ia08ylvj9l2d.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(res){
            $("#cliente").empty();
            verCliente();
            alert("Se ha Eliminado")   
        }
    });
}