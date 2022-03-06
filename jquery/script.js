
$(()=>{
  $('#prepend').click(()=>{
        let gura = $('#item').val()
        $('#list').prepend($('<li>${ gura }</li>'))
  })
}) 