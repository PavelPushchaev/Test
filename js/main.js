
$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})

// .chrome styling Vanilla JS

document.getElementById("myinput").oninput = function() {
    this.style.background = 'linear-gradient(to right, rgba(204,177,241,1) 0%, rgba(67,88,147,1) '+this.value +'%, #fff ' + this.value + '%, white 100%)'
  };


// linear-gradient(to right, rgba(204,177,241,1) 0%, rgba(67,88,147,1) 100%);