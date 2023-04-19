var status = "less";

function toggleText()
{
    var text="I love drawing and doing other crafts and I am a very artistic girl. I have an art minor and I love to create things. Ever since I was very young I have enjoyed creating and doing things with my hands. I love to paint, draw, collage, sew, scrapbook, and knit. I also enjoy going outside. I love going on adventures and seeing cool places, especially with my dog. My dog is named Luci. She is a very sweet girl and she comes with me to many places. Luci is a flat coated retriever and is my service dog. I adopted Luci after fostering many dogs. I love to help animals.";
    
    if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = "";
        document.getElementById("toggleButton").innerText = "See More";
        status = "less"
    }
}

var status = "less";

function toggleText2()
{
    var text="I plan to go to dental school and then decide which specific field I want to go into. I believe I would like to go into orthodontic care, but I also enjoy general practice dentistry. I did an internship at a dental laboratory and I also believe I could have interest in working at a dental laboratory one day as my full time job. I really enjoyed the hands on aspect of helping make prosthetic teeth. One day, hopefully I can become a dentist.";
    
    if (status == "less") {
        document.getElementById("textArea2").innerHTML=text;
        document.getElementById("toggleButton2").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea2").innerHTML = "";
        document.getElementById("toggleButton2").innerText = "See More";
        status = "less"
    }
}

function showOrder(){
    let sectionResult = document.getElementById("result");
    let img = document.getElementById("txt-one").value;
    let em = document.getElementById("txt-two").value;
    let it = document.getElementById("txt-three").value;
    let para = document.getElementById("txt-four").value;
    let one = " ";
   let two = " ";
    let three = " ";
    let four = " ";
    
    if(img.toLowerCase() == "img"){
      one = "question 1 - correct";
    }
    else{
    one = "question 1 - incorrect";
    }
    
      if(em.toLowerCase() == "em"){
      two = "question 2 - correct";
    }
    else{
    two = "question 2 - incorrect";
    }
    
      if(it.toLowerCase() == "i"){
      three = "question 3 - correct";
    }
    else{
    three = "question 3 - incorrect";
    }
    
      if(para.toLowerCase() == "p"){
      four = "question 4 - correct";
    }
    else{
    four = "question 4 - incorrect";
    }

//show result
  sectionResult.classList.remove("hidden");
    document.getElementById("one").innerHTML = one;
    document.getElementById("two").innerHTML = two;
    document.getElementById("three").innerHTML = three;
      document.getElementById("four").innerHTML = four;
}

//slideshow
function changeSlide(){
var temp = document.getElementById("pic1").src;
  document.getElementById("pic1").src = document.getElementById("pic2").src;
document.getElementById("pic2").src = document.getElementById("pic3").src;
document.getElementById("pic3").src = document.getElementById("pic4").src;
  document.getElementById("pic4").src =temp;
}
setInterval(changeSlide, 1000);
