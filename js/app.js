$(document).ready(function() {
  setTimeout(function() {
    $('#splash').css('display', 'none');
    $('#home').css('display', 'block');
  }, 3000);

  var container = $('.row');
  showAll();
  $('.input-rest').keyup(keyupInput);
  $('.rest-div').click(modal);

  function showAll() {
    for (i = 0; i < restaurants.length; i++) {
      container.append('<div class="col-xs-6 rest-div" data-name="' + restaurants[i].name + '" data-district="' + restaurants[i].district + '" data-country="' + restaurants[i].country + '" data-toggle="modal" data-target="#myModal" ><p class="name-rest">' + restaurants[i].name + '</p> <img class="place-rest"  src=' + restaurants[i].place + '></div>');
    }
  }

  function keyupInput(event) {
    var value = $(this).val().toLowerCase(); 
    $('.rest-div').hide();
    $('.rest-div').each(function() {
      var rest = $(this).text();
      var country = $(this).data('country');
      var district = $(this).data('district');

      if (rest.indexOf(value) !== -1) {
        $(this).show();
      }
      if (country.indexOf(value) !== -1) {
        $(this).show();
      }
      if (district.indexOf(value) !== -1) {
        $(this).show();
      }
    });
  }

  function modal(event) {
    for (i = 0; i < restaurants.length;i++) {
      if ($(this).data('name') === restaurants[i].name) {
        $('.name-modal').text(restaurants[i].name);
        $('.local-modal').attr('src', restaurants[i].location);
        $('.district-modal').text(restaurants[i].district);
        $('.city-modal').text(restaurants[i].city);
        $('.price-modal').text(restaurants[i].prices);
        $('.country-modal').text(restaurants[i].country);
      }
    }
  }

  $('.modal-footer .btn').click(clearInput);

  function clearInput() {
    alert('LISTO!!');
    location.reload();
  }
});