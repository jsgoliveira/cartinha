var text="";
var image="";

var texts=[
"Cecilia,^^Quero que saiba o quanto você é especial para mim. Sua presença em minha vida traz felicidade e paz.",
"Cada momento ao seu lado é incrível. Eu te amo muito e sempre vou amar.",
"Saiba que sempre estarei aqui para você, pois você é uma parte essencial da minha vida. Quero partilhar a vida com você",
"Te amo além das fronteiras dos mundos mitológicos, Te amo mais do que as palavras podem expressar. Tenho a melhor namorada do mundo e prometo amar você para sempre.^^Eu te amo^^Feliz aniversário"];

var images=[
"</br></br><img id=\"love_image1\" src=\"static/images/meili_1.png\" /><a href=\"#\" onclick=\"startTyping(1,'#message');return false;\">NEXT</a>",
"</br></br><img id=\"love_image2\" src=\"static/images/meili_2.png\" /><a href=\"#\" onclick=\"startTyping(2,'#message');return false;\">NEXT</a>",
"</br></br><img id=\"love_image3\" src=\"static/images/opfun.png\" /><a href=\"#\" onclick=\"startTyping(3,'#message');return false;\">NEXT</a>",
"</br></br><a href=\"#\" onclick=\"flower();return false;\">Flores virtuais enquanto não chegam as reais</a>"
];

var delay=100;
var currentChar=1;
var destination="[not defined]";

function typing()
{
	$(destination).html(text.substr(0, currentChar).replace(/\^/g,'</br>'));
	currentChar++;
	if (currentChar>text.length){
		currentChar=1;
		$(destination).append(image);
	}else{
		setTimeout(typing, delay);
	}
}

function startTyping(textIndex, destinationParam)
{
  text=texts[textIndex];
  image=images[textIndex];
  destination=destinationParam;
  typing();
}

$(function() {
		startTyping(0, "#message");
	});