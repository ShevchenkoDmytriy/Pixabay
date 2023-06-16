$(function()
{
  
  $('.id1').click(function()
  {
    var sertchTerm = 'пейзаж'
    sertchImage(sertchTerm)
  })
})
$(function()
{
  $('.id2').click(function()
  {
    var sertchTerm = 'дикая природа'
    sertchImage(sertchTerm)
  })
})
$(function()
{
  $('.id3').click(function()
  {
    var sertchTerm = 'природа обои'
    sertchImage(sertchTerm)
  })
})
$(function()
{
  $('.id4').click(function()
  {
    var sertchTerm = 'лес'
    sertchImage(sertchTerm)
  })
})
$(function()
{
  $('.id5').click(function()
  {
    var sertchTerm = 'небо'
    sertchImage(sertchTerm)
  })
})
$(function()
{
  $('.id6').click(function()
  {
    var sertchTerm = 'море'
    sertchImage(sertchTerm)
  })
})
$(function()
{
  $('.id7').click(function()
  {

    var sertchTerm = $('#Input').val();
    sertchImage(sertchTerm)
  })
})
function sertchImage(sertchTerm)
{
$.ajax(
  {
    
    url: 'https://pixabay.com/api/',
    method: 'GET',
    data:{
      key: '37330853-0f443d705b43389accb637998',
      q: sertchTerm
    },
    
    success: function(response)
    {
      
     if(response.hits.length >0)
     {
      var imagesContainer = $('#images-container')  
      imagesContainer.empty();
      response.hits.forEach(function(image)
      {

        var imgElements = $('<img>').attr('src', image.webformatURL)
        imagesContainer.append(imgElements)
       });
     }
    },

    error: function(error)
    {
      console.log(error)
    }
  }
)
}