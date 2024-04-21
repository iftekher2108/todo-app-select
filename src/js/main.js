
$(document).ready(function(){
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
                
                <td class='text-edit' title='double click to edit'>`+$('.text-input').val()+`</td>
                <td class='text-edit'><button class="del-btn">Delete</button></td>
            </tr>`
            );

            $('.text-input').val("");
        
})

$(document).on('click', '.del-btn', function() {
    $(this).parent().parent('tr').hide(300);
});


$(document).on('click', '.text-edit', function() {
    $(this).attr('contenteditable', true);
});

$(document).on('blur', '.text-edit', function() {
    $(this).attr('contenteditable', false);
});

});











