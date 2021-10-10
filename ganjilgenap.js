var myImage = new Image();
myImage.src = 'https://drive.google.com/uc?export=view&id=1bnXBy4FpjXtFf-6380Z-W2zn-Zz0zzDj';
document.body.appendChild(myImage);


$('button').click(function(){

var angka = $("#angka").val();

 cek(angka);
 

 
  
  
}); 

function cetak(angka){

 $("#output").html('<b'+'> Adalah Bilangan  '+ angka +'</b'+'>') ;
}
