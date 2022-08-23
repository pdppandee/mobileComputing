
/*
function add(){
      var new_chq_no = parseInt($('#total_chq').val())+1;
      var new_input="<input type='text' id='new_"+new_chq_no+"'>";
      $('#new_chq').append(new_input);
      $('#total_chq').val(new_chq_no)
    }
    function remove(){
      var last_chq_no = $('#total_chq').val();
      if(last_chq_no>1){
        $('#new_'+last_chq_no).remove();
        $('#total_chq').val(last_chq_no-1);
      }
    }
*/
var incomeList = [];
var x = 2

function addIncome(){
    var incomeMax = 3;
   
    if(x <= incomeMax){
        $('#newIncome').append('<div><input placeholder = "Enter Income" type = "text" id = "income" class="income" name="income">' +
        '<div><button type = "button" onclick = "remove()">Remove</button></div></div>'); 
        x++; 

    }
    
}

function remove(){
    // $('#newIncome').remove()
    console.log($(this).parent('div').parent('div'))
    $(this).parent('div').remove(); 
    x--;
}

function deleteIncome(){

    $('#newIncome').remove();
}

function sumIncome(){

    var arr = document.getElementsByName("income");
    const ic = $("#income").val();
    console.log(arr)
    console.log(ic)

//   let sum;
// $("#income1")      if $()et su.e
// let sum;
// // $(selector).each(function(node){
// //     sum+=node.val()
// }) 

  

// 
// const income = [...document.querySelectorAll('income')];
  // console.log(income);
}