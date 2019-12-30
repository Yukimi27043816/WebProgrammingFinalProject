//JavaScript Document
class MapBlock {
	constructor(CanvasDOM, block) {
		this.DOM = CanvasDOM;
		this.Block = block;
	}
}
class Player {
	constructor(Name,NewDirection, NewNowPosition) {
		this.Name=Name;
		this.Direction = NewDirection;
		this.Images=[];
		this.AddImages();
		this.WalkImage = this.Images[this.Direction+1];
		this.NowPosition = NewNowPosition;
	}
	AddImages(){
		var TempImage=new Image();
		TempImage.setAttribute('src','./img/'+this.Name+'/face.png');
		this.Images.push(TempImage);
		for(var counter=0;counter<4;counter++){
			TempImage=new Image();
			TempImage.setAttribute('src','./img/'+this.Name+'/walk_'+counter+'.png');
			this.Images.push(TempImage);
		}
	}
	Moveto(Direction,PositionX,PositionY){
		this.ClearMapImage();
		this.Direction=Direction;
		this.NowPosition=[PositionX,PositionY];
		this.WalkImage=this.Images[this.Direction+1];
		this.SetMapImage();
	}
	
	Move(NewDirection) {
		this.ClearMapImage();
		this.Direction = NewDirection;
		var NextPosition=this.NextPosition;
		this.WalkImage = this.Images[this.Direction+1];
		if (NextPosition[0] >= 0 && NextPosition[1] >= 0 && 
			NextPosition[0] < 20 && NextPosition[1] < 20 && 
			Map[NextPosition[0]][NextPosition[1]].Block == true) {
			this.NowPosition = [NextPosition[0], NextPosition[1]];
		}
		this.SetMapImage();
	}
	SetMapImage() {
		Map[this.NowPosition[0]][this.NowPosition[1]].DOM.getContext('2d').drawImage(this.WalkImage, 0, 0, this.WalkImage.width, this.WalkImage.height, 0, 0, Map[this.NowPosition[0]][this.NowPosition[1]].DOM.width, Map[this.NowPosition[0]][this.NowPosition[1]].DOM.height);
	}
	ClearMapImage(){
		Map[this.NowPosition[0]][this.NowPosition[1]].DOM.getContext('2d').clearRect(0, 0, Map[this.NowPosition[0]][this.NowPosition[1]].DOM.width, Map[this.NowPosition[0]][this.NowPosition[1]].DOM.height);
	}
	get NextPosition(){
		switch (this.Direction) {
			case Direction.up:
				return [this.NowPosition[0] - 1, this.NowPosition[1]];
				break;
			case Direction.left:
				return [this.NowPosition[0], this.NowPosition[1] - 1];
				break;
			case Direction.down:
				return [this.NowPosition[0] + 1, this.NowPosition[1]];
				break;
			case Direction.right:
				return [this.NowPosition[0], this.NowPosition[1] + 1];
				break;
		}
	}
	get FaceImage(){
		return this.Images[0];
	}
}

var Direction = {
	up: 0,
	left: 1,
	down: 2,
	right: 3
};
var Heroine = new Player('Heroine',Direction.down, [14, 15]);
var Map = [];
var BlockData = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 3],
	[0, 4],
	[0, 5],
	[0, 6],
	[0, 11],
	[0, 12],
	[0, 13],
	[0, 14],
	[0, 15],
	[0, 16],
	[0, 17],
	[0, 18],
	[0, 19],
	[1, 1],
	[1, 2],
	[1, 3],
	[1, 4],
	[1, 5],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 3],
	[2, 4],
	[2, 5],
	[2, 6],
	[3, 0],
	[3, 1],
	[3, 2],
	[3, 3],
	[3, 4],
	[3, 5],
	[3, 6],
	[4, 0],
	[4, 1],
	[4, 2],
	[4, 3],
	[4, 4],
	[4, 5],
	[4, 6],
	[5, 0],
	[5, 1],
	[5, 2],
	[5, 3],
	[5, 4],
	[5, 5],
	[5, 6],
	[6, 0],
	[6, 1],
	[6, 2],
	[6, 3],
	[6, 4],
	[6, 5],
	[6, 6],
	[7, 2],
	[7, 3],
	[7, 4],
	[9, 13],
	[9, 14],
	[9, 15],
	[9, 16],
	[9, 17],
	[10, 13],
	[10, 14],
	[10, 15],
	[10, 16],
	[10, 17],
	[11, 13],
	[11, 14],
	[11, 15],
	[11, 16],
	[11, 17],
	[12, 1],
	[12, 2],
	[12, 3],
	[12, 4],
	[12, 13],
	[12, 14],
	[12, 15],
	[12, 16],
	[12, 17],
	[13, 1],
	[13, 2],
	[13, 3],
	[13, 4],
	[13, 13],
	[13, 14],
	[13, 16],
	[13, 17],
	[14, 1],
	[14, 2],
	[14, 3],
	[14, 4],
	[15, 1],
	[15, 2],
	[15, 3],
	[15, 4],
	[16, 1],
	[16, 2],
	[16, 3],
	[16, 4],
	[17, 1],
	[17, 2],
	[17, 3],
	[19, 19],
	[19, 1],
	[19, 2],
	[19, 3],
	[19, 4],
	[19, 5],
	[19, 6],
	[19, 11],
	[19, 12],
	[19, 13],
	[19, 14],
	[19, 15],
	[19, 16],
	[19, 17],
	[19, 18],
	[19, 19]
];


function main() {
	AddJQuery();
	//window.setTimeout(ShowStory1, 2000);
	//window.setTimeout(ShowStory1, 1000);
	window.setTimeout(function () {
		$('#BG').attr('src', 'img/sence/sence1BG.png');
		SetMap();
		FreedomAction();
	}, 1000);
	
}

function ShowStory1() {
	$('#Container').append('<p class="story">Adobe曆2020年</br></br>Flash大陸上的人們仍然過著幸福快樂，每天等著發大財的日子</br></br>但是她們仍不知道的是，她們將要面對的浩劫......</p>');
	$('#Container').find('.story').animate({'opacity': '1'});
	//window.setTimeout(ShowStory2, 8000);
	window.setTimeout(ShowStory2, 1000);
}

function ShowStory2() {
	$('.story').animate({
		'opacity': '0'
	});
	//window.setTimeout(ShowStory3, 2000);
	window.setTimeout(ShowStory3, 1000);
}

function ShowStory3() {
	$('.story').remove();
	$('#BG').attr('src', 'img/sence/sence1BG.png');
	SetMap();
	SetMessage();
	window.setTimeout(ShowStory4, 1000);
}
function ShowStory4(){
	$('#MessageContainer').append('<p class="message"><span class="namemessage">雪</span>：</br>今天是個好日子呢，出門逛逛吧！</p>');
	$(window).on('keydown',NextMessageAnalyze1);
}
function SetMap(){
	$('#Container').append('<div id="CanvasContainer" class="canvascontainer"></div>');
	for (var RowCounter = 0; RowCounter < 20; RowCounter++) {
		var NewRow = [];
		var TempRow;
		if (RowCounter < 10) TempRow = '0' + RowCounter;
		else TempRow = RowCounter;
		for (var counter = 0; counter < 20; counter++) {
			var Temp;
			if (counter < 10) Temp = '0' + counter;
			else Temp = counter;
			$('#CanvasContainer').append('<canvas id="Map' + TempRow + Temp + '" class ="canvas"></canvas>');
			var NewBlock = new MapBlock($('#Map' + TempRow + Temp)[0], true);
			NewRow.push(NewBlock);
		}
		Map.push(NewRow);
	}
	UpdateMapData(Map, BlockData);
	Heroine.SetMapImage();
}
function SetMessage(){
	$('#Container').append('<div id="MessageContainer" class="messagecomtainer"></div>');
	$('#MessageContainer').append('<img id="TalkBorder" class="talkborder" src="./img/TalkBorder.png">').append('<img id="FaceImage" class="faceimage" src="'+Heroine.FaceImage.src+'">');
	$('.messagecomtainer').animate({'opacity': '1'});
}
function NextMessageAnalyze1(e){
	$(window).off('keydown',NextMessageAnalyze1);
	var key = (e.keyCode || e.which);
	if(parseInt(key)==32||parseInt(key)==13){
		$('.messagecomtainer').animate({'opacity': '0'});
		window.setTimeout(FreedomAction, 1000);
	}
	
}
function FreedomAction(){
	$(window).on('keydown', function(e){MoveAnalyze(Heroine,e)});
	setInterval(BorderMoveCheck,300);
}
function BorderMoveCheck() {
	if (Heroine.NowPosition[0] == 14 && Heroine.NowPosition[1] == 19) window.location.replace("./SnakeStart.html");
	else if ((Heroine.NowPosition[0] == 8 && Heroine.NowPosition[1] == 0) ||
		(Heroine.NowPosition[0] == 9 && Heroine.NowPosition[1] == 0)) window.location.replace("./2048.html");
	else if (Heroine.NowPosition[0] == 19) {
		window.alert("以下區域施工中！");
		Heroine.Moveto(Direction.up, 18, Heroine.NowPosition[1]);
	} //window.location.replace("./Stair.html");
}

function MoveAnalyze(Charater,e) {
	var key = (e.keyCode || e.which);
	switch (parseInt(key)) {
		case 37:
			Charater.Move(Direction.left);
			break;
		case 38:
			Charater.Move(Direction.up);
			break;
		case 39:
			Charater.Move(Direction.right);
			break;
		case 40:
			Charater.Move(Direction.down);
			break;
	}
}
function UpdateMapData(Map, BlockData) {
	for (var counter = 0; counter < BlockData.length; counter++) {
		Map[BlockData[counter][0]][BlockData[counter][1]].Block = false;
	}
}
function AddJQuery() {
	var JQueryElement = document.createElement("script");
	JQueryElement.setAttribute("type", "text/javascript");
	JQueryElement.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
	document.body.appendChild(JQueryElement);
}

window.addEventListener("load", main);