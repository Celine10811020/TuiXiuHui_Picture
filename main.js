var number;

$('.image').hide();
$('.previous').hide();
$('.next').hide();

$('.start').on('click', doSearch);
$('.previous').on('click', goPrevious);
$('.next').on('click', goNext);

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    goPrevious();
  }else if (e.key === 'ArrowRight') {
    goNext();
  }
});

function doSearch()
{
  $('.image').show();
  $('.previous').show();
  $('.next').show();

  var date = document.getElementById("date");

  switch(date.value)
  {
    case "1":
      document.getElementById('title').innerHTML = "2024.08.17 國立台灣文學館（上午）、林百貨（下午）、神農街（晚餐）";
      break;
    case "2":
      document.getElementById('title').innerHTML = "2024.08.18 遊潟湖（上午）、水交社文化園區（下午）";
      break;
    default:
      return;
  }

  number = 1

  initialization();
  showPicture();
}

function showPicture()
{
  var date = document.getElementById("date");
  var image = document.getElementById("image");

  switch(date.value)
  {
    case "1":
      image.src = "./picture/20240817 (" + number + ").jpg";
      break;
    case "2":
      image.src = "./picture/20240818 (" + number + ").jpg";
      break;
    default:
      return;
  }

  document.getElementById('descript').innerHTML = Description[date.value][number];

  console.log(date.value + " " + number);
}

function goPrevious()
{
  if(number > 1)
  {
    number--;
  }

  showPicture();
}

function goNext()
{
  var date = document.getElementById("date");

  switch(date.value)
  {
    case "1":
      if(number < 19)
      {
        number++;
      }
      break;
    case "2":
      if(number < 18)
      {
        number++;
      }
      break;
    default:
      return;
  }

  showPicture();
}
