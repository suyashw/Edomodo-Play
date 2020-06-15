import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Img from 'react-image';
import ReactDOM from 'react-dom';



class App extends React.Component {

  	render(){
      return(
	    {}
      );
    }
}

// Component showing User Details
class Details extends Component {

	constructor(props) {
		super(props);
		this.data = {};	
		this.APIDetails();
	}

	APIDetails() {	
		fetch('https://jsonplaceholder.typicode.com/posts/1')
  		.then(response => response.json())
 		.then( (json) => { 
 		this.data = json;
 		console.log(this.data);
 		this.forceUpdate();
    	})
 	}

	render()
	{
		return(
			<div>
				<img src={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum.png"}
					     srcset={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@2x.png 2x,img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@3x.png 3x"}
					     className="ce6ee6705c0a35988f3d86700--perfect-hair-color-emmy-rossum img-circle" /*style="left:9.65vw;top:2.35vh;"*//>
				<img src={"img/shape-10.png"} srcset={"img/shape-10@2x.png 2x,img/shape-10@3x.png 3x"} className="Shape-10"/>

				<div className="layer-1">{this.data.id}</div>

				<div className="Welcome-Andrea">Welcome Andrea!</div>

				<img src={"img/shape-19.png"} srcset={"img/shape-19@2x.png 2x,img/shape-19@3x.png 3x"} className="Shape-19"/>

				<div className="-Badges-earned">{this.data.userId} 2 Badges earned</div>

				<img src={"img/shape-20.png"} srcset={"img/shape-20@2x.png 2x, img/shape-20@3x.png 3x"} className="Shape-20"/>

				<div className="Good-start-43-questions-answered">Good start! 43 questions answered.</div>

				<img src={"img/shape-21.png"} srcset={"img/shape-21@2x.png 2x, img/shape-21@3x.png 3x"} className="Shape-21"/>

				<div className="Participated-in-8-discussions">Participated in 8 discussions</div>
			</div>
			);
	}

}


// Component rendered for clicking the Quiz on Main Page
class Quiz extends Component {

	constructor(opts){
	  super(opts);
	  this.handleQuiz = this.handleQuiz.bind(this);
	}

	handleQuiz (){
	  ReactDOM.render(<Question/>,document.getElementById('rep_lead'));
	  console.log('The link was clicked.'); 
	}

	render(){
	  return(
	    <div>
			<div id="HIGH">
			  <p>HIGH</p>
			</div>

			<div id="MIDDLE">
			  <p>MIDDLE</p>
			</div>

			<div id="ELEMENTARY">
			  <p>ELEMENTARY</p> 
			</div>

			<div id= "Rectangle-4">
			  <a onClick={this.handleQuiz}>
				<img className="Vector-Smart-Object" src={"img/vector-smart-object1.png"}
					srcset={"img/vector-smart-object@22x.png 2x,img/vector-smart-object@33x.png 3x"}/></a>
			</div>
			 
			<div id="Rectangle-4-copy">
			  <a onClick={this.handleQuiz}>
				<img className="Vector-Smart-Object" src={"img/vector-smart-object(1).png"}
				    srcset={"img/vector-smart-object@2x(1).png 2x,img/vector-smart-object@3x(1).png 3x"}/></a>
			</div>

			<div id="Rectangle-4-copy-2" >
			  <a onClick={this.handleQuiz}><img className="Vector-Smart-Object" src={"img/vector-smart-object(2).png"}
				    srcset={"img/vector-smart-object@2x(2).png 2x,img/vector-smart-object@3x(2).png 3x"} /></a>
			</div>
	  	</div>

	  );
	}

}

// Component to be rendered after clicking the quiz showing question 
class Question extends Component {

	constructor(props) {
		super(props);
		this.data = {};	
		this.APIQuestion();
	}

// Api that fetches 
	APIQuestion() {	
		fetch('https://api.myjson.com/bins/1f3avl')
  		.then(response => response.json())
 		.then( (json) => { 
 		this.data = json[0];
 		this.forceUpdate();
    	})
 	}
	render(){
		return(
			<div>
				<div>
					<div className="Rectangle-4-copy-2">
						<style dangerouslySetInnerHTML={{__html: `
     				 	.Rectangle-4-copy-2 { left: 12vw; 
							width: calc(100vw - 15vw); 
							top: 2vh; 
							position: absolute;
							height: 21vh;
							border-radius: 1vw;
							background-color: #b4b7d7;  }
  						`}} />
						<div className="Vector-Smart-Object">
							<img src={"vector-smart-object/vector-smart-object.png"} srcset={"vector-smart-object/vector-smart-object@2x.png 2x, vector-smart-object/vector-smart-object@3x.png 3x"}/>
							 <style dangerouslySetInnerHTML={{__html: `
     				 		.Vector-Smart-Object {
     				 		margin-left: 2vw; 
							margin-top: 5.2vh;
							width: 5vw;
							height: 10.5vh;
							object-fit: contain;
							background: transparent;  }
  						`}} />
						</div>
						
						<div className="edit1">
						    <style dangerouslySetInnerHTML={{__html: `
     				 		.edit1 { 
     				 			position: absolute; 
								right: 1vw; top: 2vh; }
  						`}} />
							<div className="Shape-22"><a>X</a>
							 <style dangerouslySetInnerHTML={{__html: `
     				 		.Shape-22 { 
								width: 1vw;
								height: 1vh;
								color: #ffffff;
								text-decoration: none;
							`}} />
							</div>
						</div>

						<div className="edit2">
						     <style dangerouslySetInnerHTML={{__html: `
     				 		.edit2 { 
     				 			position: absolute; 
								margin-left: 8vw; 
								top: 5vh; }
  						`}} />
							<div className="ELEMENTARY-English---5th-Grade"><p>ELEMENTARY English (5th Grade)</p>
								<style dangerouslySetInnerHTML={{__html: `
     				 			.ELEMENTARY-English---5th-Grade{ 
     				 				font-family: Montserrat;
									font-size: 1.4vw;
									text-align: left;
									color: #ffffff;
								`}} />
							</div>
						</div>

						<div className="edit3">
						    <style dangerouslySetInnerHTML={{__html: `
     				 		.edit3 { 
     				 			position: absolute; 
								margin-left: 8vw; 
								top:10vh; }
  						`}} />
							<div className="This-course-helps-you-improve-the-printing-and-typesetting-indu"><p>This course helps you improve the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							<style dangerouslySetInnerHTML={{__html: `
     				 			.This-course-helps-you-improve-the-printing-and-typesetting-indu{ 
     				 				font-family: Montserrat;
									font-size: 1.1vw;
									text-align: left;
									color: #ffffff;
									margin-right: 2vw;
							`}} />
							</div>
						</div>

						<div className="edit4">
						     <style dangerouslySetInnerHTML={{__html: `
     				 		.edit4 { 
     				 			position: absolute; 
								margin-left: 1vw; 
								margin-top: 7vh; }
  						`}} />
							
							<div className="VIEW-DISCUSSION"><a><u><style dangerouslySetInnerHTML={{__html: `
     				 		.VIEW-DISCUSSION { 
     				 			text-decoration: none;
     				 			color: #333333; 
     				 			height: 1vh;
								font-family: Montserrat;
								font-size: 1.1vw;
								text-align: left;
								color: #333333;}
  						`}} />VIEW DISCUSSION</u></a></div>
						</div>

						<div className="edit5">
						    <style dangerouslySetInnerHTML={{__html: `
     				 		.edit5 { 
     				 			position: absolute; margin-left: 14vw; margin-top: 7vh; }
  							`}} />
							<div className="VIEW-ANSWER-HISTORY"><a><u><style dangerouslySetInnerHTML={{__html: `
     				 		.VIEW-ANSWER-HISTORY { 
     				 			text-decoration: none; 
     				 			color: #333333;
     				 			height: 1vh;
								font-family: Montserrat;
								font-size: 1.1vw;
								text-align: left;
								color: #333333; }
  						`}} />VIEW ANSWER HISTORY</u></a></div>
						</div>

						<div className="edit6">
							<style dangerouslySetInnerHTML={{__html: `
     				 		.edit6 { 
     				 			margin-top: 18.6vh; 
								margin-left: 1vw; }
  						`}} />
							<div id="question" className="Which-sentence-shows-correct-punctuation"><p>{this.data.question}</p>
							<style dangerouslySetInnerHTML={{__html: `
     				 		.Which-sentence-shows-correct-punctuation{
     				 			font-family: Montserrat;
								font-size: 1.4vw;
								text-align: left;
								color: #333333;
     				 		`}} />
     				 		</div>
						</div>

						<div>
							<div className="Rounded-Rectangle-4-1">
							    <style dangerouslySetInnerHTML={{__html: `
     				 			.Rounded-Rectangle-4-1{ 
     				 				position: absolute; 
									margin-left: 1vw; 
									margin-top: 2vh;
									width: 46vw;
									height: 5.1vh;
									border-radius: 8px;
									background-color: transparent;
									border: solid 1px #cccccc; }
  								`}} />
								<div className="Rounded-Rectangle-4-copy-1">
								    <style dangerouslySetInnerHTML={{__html: `
     				 				.Rounded-Rectangle-4-copy-1 { 
     				 					position: absolute; 
										margin-left: 0vw; 
										margin-top: 0vh;
										width: 2.6vw;
										height: 5.1vh;
										border-radius: 8px 0 0 8px;
										background-color: transparent;
										border: solid 1px #cccccc; }
  									`}} />
  									<p>
									<div className="glyphicon glyphicon-ok"> <a>
										 <style dangerouslySetInnerHTML={{__html: `
     				 					.glyphicon glyphicon-ok { 
     				 							color: black; 
     				 							margin-left: 8.7vw; 
     				 							margin-top: 20.1vh; 
     				 							text-decoration: none; 
     				 							font-size: 1vw;
     				 						}
  										`}} /></a> 
  										</div>
  										</p>
								</div>
								<div className="option1" id="option1">
								    <style dangerouslySetInnerHTML={{__html: `
     				 				.option1 { 
     				 					position: absolute;
     				 					margin-left: 4vw; 
     				 					margin-top: 1.5vh; }
  									`}} />
									{this.data.option1}
								</div>
							</div>
							<div className="Rounded-Rectangle-4-2">
							    <style dangerouslySetInnerHTML={{__html: `
     				 			.Rounded-Rectangle-4-2 { 
     				 				position: absolute; 
									margin-left: 1vw; 
									margin-top: 10vh;
									width: 46vw;
									height: 5.1vh;
									border-radius: 8px;
									background-color: transparent;
									border: solid 1px #cccccc; }
  								`}} />
								<div className="Rounded-Rectangle-4-copy-2">
								     <style dangerouslySetInnerHTML={{__html: `
     				 				.Rounded-Rectangle-4-copy-2 { 
     				 					position: absolute; 
										margin-left: 0vw; 
										margin-top: 0vh;
										width: 2.6vw;
										height: 5.1vh;
										border-radius: 8px 0 0 8px;
										background-color: transparent;
										border: solid 1px #cccccc; }
  									`}} />
									<div className="glyphicon glyphicon-ok"><a>
									    <style dangerouslySetInnerHTML={{__html: `
     				 					.glyphicon glyphicon-ok{ 
     				 							color: black; 
     				 							margin-left: 0.7vw; 
     				 							margin-top: 1.1vh; 
     				 							text-decoration: none; 
     				 							font-size: 1vw;
     				 						}
  										`}} />
									</a> </div>
								</div>
								<div className="option2" id="option2">
								    <style dangerouslySetInnerHTML={{__html: `
     				 				.option2 { 
     				 					position: absolute;
     				 					margin-left: 4vw; 
     				 					margin-top: 1.5vh; }
  									`}} />
									{this.data.option2}
								</div>
							</div>


							<div className="Rounded-Rectangle-4-3">
							    <style dangerouslySetInnerHTML={{__html: `
     				 			.Rounded-Rectangle-4-3 { 
     				 				position: absolute; 
									margin-left: 1vw; 
									margin-top: 18vh;
									width: 46vw;
									height: 5.1vh;
									border-radius: 8px;
									background-color: transparent;
									border: solid 1px #cccccc; }
  								`}} />
								<div className="Rounded-Rectangle-4-copy-3">
								     <style dangerouslySetInnerHTML={{__html: `
     				 				.Rounded-Rectangle-4-copy-3 { 
     				 					position: absolute; 
										margin-left: 0vw; 
										margin-top: 0vh;
									    width: 2.6vw;
										height: 5.1vh;
										border-radius: 8px 0 0 8px;
										background-color: transparent;
										border: solid 1px #cccccc;}
  									`}} />
									<div className="glyphicon glyphicon-ok"><a>
									    <style dangerouslySetInnerHTML={{__html: `
     				 					.glyphicon glyphicon-ok{ 
     				 							color: black; 
     				 							margin-left: 0.7vw; 
     				 							margin-top: 1.1vh; 
     				 							text-decoration: none; 
     				 							font-size: 1vw;
     				 						}
  										`}} />
									</a> </div>
								</div>
								<div className="option3" id="option3">
								    <style dangerouslySetInnerHTML={{__html: `
     				 				.option3 { 
     				 					position: absolute;
     				 					margin-left: 4vw; 
     				 					margin-top: 1.5vh; }
  									`}} />
									{this.data.option3}
								</div>
							</div>
							

							<div className="Rounded-Rectangle-4-4">
							    <style dangerouslySetInnerHTML={{__html: `
     				 			.Rounded-Rectangle-4-4 { 
     				 				position: absolute; 
									margin-left: 1vw; 
									margin-top: 26vh;
									width: 46vw;
									height: 5.1vh;
									border-radius: 8px;
									background-color: transparent;
									border: solid 1px #cccccc; }
  								`}} />
								<div className="Rounded-Rectangle-4-copy-4">
								     <style dangerouslySetInnerHTML={{__html: `
     				 				.Rounded-Rectangle-4-copy-4 { 
     				 					position: absolute; 
										margin-left: 0vw; 
										margin-top: 0vh;
									    width: 2.6vw;
										height: 5.1vh;
										border-radius: 8px 0 0 8px;
										background-color: transparent;
										border: solid 1px #cccccc; }
  									`}} />
									<div className="glyphicon glyphicon-ok"><a>
									    <style dangerouslySetInnerHTML={{__html: `
     				 					.glyphicon glyphicon-ok{ 
     				 							color: black; 
     				 							margin-left: 1.7vw; 
     				 							margin-top: 2.1vh; 
     				 							text-decoration: none; 
     				 							font-size: 1vw;
     				 						}
  										`}} />
									</a> </div>
								</div>
								<div className="option4" id="option4">
								    <style dangerouslySetInnerHTML={{__html: `
     				 				.option4 { 
     				 					position: absolute;
     				 					margin-left: 4vw; 
     				 					margin-top: 1.5vh; }
  									`}} />
									{this.data.option4}
								</div>
							</div>
						</div>



						<div className="Rounded-Rectangle-1-copy-2">
						    <style dangerouslySetInnerHTML={{__html: `
     				 				.Rounded-Rectangle-1-copy-2 { 
     				 					position: absolute;
     				 					width: 13.1vw;
										height: 5.3vh;
										border-radius: 3vw;
										background-color: #ffffff;
										border: solid 1px #a173a9;
										margin-top: 50vh;
										margin-left: 25vw; }
  									`}} />
							<div className="SKIP">SKIP</div>
							   <style dangerouslySetInnerHTML={{__html: `
     				 		   .SKIP { 
     				 		   	height: 2vh;
								font-family: Montserrat;
								font-size: 1.3vw;
								font-weight: bold;
								letter-spacing: 0.1vw;
								text-align: center;
								color: #a173a9;
								margin-top: 0.6vh; }
							`}} />
						</div>
						<div className="Rounded-Rectangle-1-copy">
						    <style dangerouslySetInnerHTML={{__html: `
     				 				.Rounded-Rectangle-1-copy { 
     				 					position: absolute;
     				 					width: 13.1vw;
										height: 5.3vh;
										border-radius: 3vw;
										background-color: #f2716f;
										margin-top: 50vh;
										margin-left: 40vw; }
  									`}} />

							<div className="SUBMIT">
								<p><form action="" onsubmit="nextRecord()">
		  							<input type="submit" value="Submit"/>
								</form>
								 <style dangerouslySetInnerHTML={{__html: `
     				 			.SUBMIT {
     				 					height: 2vh;
										font-family: Montserrat;
										font-size: 1.3vw;
										font-weight: bold;
										letter-spacing: 0.1vw;
										text-align: center;
										color: #ffffff;
										margin-top: 0.6vh; }
									`}} />	
							</p>
							</div>
						</div>

						<div className="edit7">
						     <style dangerouslySetInnerHTML={{__html: `
     				 				.edit7 { 
     				 					position: absolute;
     				 					top: 11vh; margin-left: 31vw; z-index: 2;
     				 					width: 20vw;
										height: 20vh;
										object-fit: contain;
										background: transparent; }
  									`}} /> 
							<img src={"vector-smart-object-badge/vector-smart-object.png"} srcset={"vector-smart-object-badge/vector-smart-object@2x.png 2x, vector-smart-object-badge/vector-smart-object@3x.png 3x"} className="edit7" /*style="height: 20vh; width: 20vw;"*/ />
						</div>
						
						<div className="Rectangle-4-copy-3">
						    <style dangerouslySetInnerHTML={{__html: `
     				 				.Rectangle-4-copy-3 { 
     				 					position: absolute;
     				 					 margin-left: 59vw; 
     				 					 top: 27vh; 
     				 					 overflow: hidden; 
     				 					 text-overflow: ellipsis;
     				 					 width: 25.8vw;
										height: 28.7vh;
										border-radius: 0.8vw;
										background-color: #f0f0f0; }
  									`}} />
							<div className="-more-right-answers-to-earn-a-badge-Get-it-quick-to-move-stra"><p>3 more right answers to earn a badge. Get it quick to move straight to rank 2!</p>
						    <style dangerouslySetInnerHTML={{__html: `
     				 				.-more-right-answers-to-earn-a-badge-Get-it-quick-to-move-stra { 
     				 					width: 19vw;
										font-family: Montserrat;
										font-size: 2.4vh;
										line-height: 1.5;
										text-align: center;
										color: #9294ae;
										margin-top: 15vh;
										margin-left: 3.5vw; }
										`}} />
								</div>
						</div>

					</div>
					
				</div>
			</div>

			);
	}
}

class Leaderboard extends React.Component {

      render(){
      return(
          <div>
            <div className="col-md-8">
                <div className="Rectangle-1-copy-4">
                    <div><p className="Leaderboard">Leaderboard</p></div>
                    <a href=""><img src={"img/shape-22.png"} srcset={"img/shape-22@2x.png 2x,img/shape-22@3x.png 3x"} className="Shape-22"/></a>
                    <div><p className="TOP-5">TOP-5</p></div>
                    <div className="row"><style dangerouslySetInnerHTML={{__html:`.styled {position : absolute;}`}} />
                    <div><p className="layer">1</p></div>
                    <img src={"img/rounded-rectangle-2.png"} srcset={"img/rounded-rectangle-2@2x.png 2x,img/rounded-rectangle-2@3x.png 3x"} className="Rounded-Rectangle-2"/>
        <img src={"img/shape-10.png"} srcset={"img/shape-10@2x.png 2x,img/shape-10@3x.png 3x"} className="Shape-10-copy"/>
         <img src={"img/shape-19.png"} srcset={"img/shape-19@2x.png 2x,img/shape-19@3x.png 3x"} className="Shape-19-copy"/>
         <div className="layer-2"><style dangerouslySetInnerHTML={{__html:`.styled {left:54.4vw;}`}}/>4</div>
         <div className="layer-2"><style dangerouslySetInnerHTML={{__html:`.styled {left:61.06vw;}`}}/>12</div>
         <style dangerouslySetInnerHTML={{__html:`.styled {top:16.32vh;left:2.20vw;position: absolute;width: 4.02vw;height: 7.17vh;}`}} />
         <img src={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum.png"} srcset={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@2x.png 2x,img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@3x.png 3x"} className="ce6ee6705c0a35988f3d86700--perfect-hair-color-emmy-rossum img-circle"/> 
    <div className="Lisa-Horshington"><style dangerouslySetInnerHTML={{__html:`.styled {left:7.84vw;top:18.91vh;position: absolute;}`}} /><p>Lisa Horshington</p></div></div>
    <div className="row"><style dangerouslySetInnerHTML={{__html:`.styled {top:11.12vh;position:absolute;}`}} />
    <div className="layer">2</div>
                    <img src={"img/rounded-rectangle-2.png"} srcset={"img/rounded-rectangle-2@2x.png 2x,img/rounded-rectangle-2@3x.png 3x"} className="Rounded-Rectangle-2" />
        <img src={"img/shape-10.png"} srcset={"img/shape-10@2x.png 2x,img/shape-10@3x.png 3x"} className="Shape-10-copy" />
         <img src={"img/shape-19.png"} srcset={"img/shape-19@2x.png 2x,img/shape-19@3x.png 3x"} className="Shape-19-copy" />
         <div className="layer-2"><style dangerouslySetInnerHTML={{__html:`.styled {left:54.4vw;}`}} />4</div>
         <div className="layer-2"><style dangerouslySetInnerHTML={{__html:`.styled {left:61.06vw;}`}} />12</div>
        
       <img src={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum.png"} srcset={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@2x.png 2x,img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@3x.png 3x"} className="ce6ee6705c0a35988f3d86700--perfect-hair-color-emmy-rossum img-circle" />
       <style dangerouslySetInnerHTML={{__html:`.styled {top:16.32vh; left:2.20vw;position: absolute;width: 4.02vw;height: 7.17vh;}`}} />
         
    <div><p className="Lisa-Horshington"><style dangerouslySetInnerHTML={{__html:`.styled {left:7.84vw;top:18.91vh;position: absolute;}`}} />Kim Cormell</p></div>

                </div>
                <div className="row"><style dangerouslySetInnerHTML={{__html:`.styled {top:22.24vh;position:relative;}`}} />
    <div className="layer">3</div>
        <img src={"img/rounded-rectangle-2.png"} srcset={"img/rounded-rectangle-2@2x.png 2x,img/rounded-rectangle-2@3x.png 3x"} className="Rounded-Rectangle-2"/>
        <img src={"img/shape-10.png"} srcset={"img/shape-10@2x.png 2x, img/shape-10@3x.png 3x"} className="Shape-10-copy"/>
        <img src={"img/shape-19.png"} srcset={"img/shape-19@2x.png 2x, img/shape-19@3x.png 3x"} className="Shape-19-copy" />
         <div className="layer-2"><style dangerouslySetInnerHTML={{__html:`.styled {left:54.4vw;}`}} />4</div>
         <div className="layer-2"><style dangerouslySetInnerHTML={{__html:`.styled {left:61.06vw;}`}} />12</div>
       <img src={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum.png"} srcset={"img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@2x.png 2x, img/5311630-ce-6-ee-6705-c-0-a-35988-f-3-d-86700-perfect-hair-color-emmy-rossum@3x.png 3x"} className="ce6ee6705c0a35988f3d86700--perfect-hair-color-emmy-rossum img-circle"/>
       <style dangerouslySetInnerHTML={{__html:`.styled {top:16.32vh; left:2.20vw;position: absolute;width: 4.02vw;height: 7.17vh;}`}} />
         
    <div><p className="Lisa-Horshington"><style dangerouslySetInnerHTML={{__html:`.styled {top:16.32vh;left:2.20vw;position: absolute;width: 4.02vw;height: 7.17vh;}`}} />Christina Joy</p></div>

                </div>
                </div>
    </div>
    </div>
      );
    }
}

// Component to be rendered on clicking the View leaderboard

class VIEW_LEADERBOARD extends React.Component {

    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.APIcall = this.APIcall.bind(this);
        this.data = {};
    }

    APIcall(){    
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
         .then( (json) => { 
         this.data = json
        ReactDOM.render(<div><h1>{this.data.title}</h1></div>,document.getElementById('rep_lead'))
        })
     }

    handleClick () {
            ReactDOM.render(<Leaderboard/>,document.getElementById('rep_lead'));
    };

            
    render(){
        return (
        <div>
            <div onClick={() => this.handleClick()}>VIEW_LEADERBOARD </div> 
        </div>        
        );    
    }
}
setTimeout(30000);
const app2 = document.getElementById('Rounded-Rectangle-1');
ReactDOM.render(<Details/>,app2);
const app = document.getElementById('app');
ReactDOM.render(<VIEW_LEADERBOARD/>,app);
const app1 = document.getElementById('quiz_link');
ReactDOM.render(<Quiz/>,app1);



export default App;
