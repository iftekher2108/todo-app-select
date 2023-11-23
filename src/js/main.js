

$('.select_all').click(function() {
    $('.ids').prop('checked',$(this).prop('checked'))
})


$('.delete-btn').click(function() {
    // $('.ids:checked').hide(300)
    $('.ids:checked').parent().parent('tr').hide(300)
    // console.log('delete')
})


$(".add-btn").click(function(){
  
    $('.note').append( 
            `<tr style='text-align:center;'>
                <td><input type="checkbox" class="ids"></td>
                
                <td>`+$('.text-input').val()+`</td>
            </tr>`
            );

            $('.text-input').val("");
              
})










