function submitScore(event) {
	event.preventDefault();

	const score = event.target.score.value;
	const msg = document.getElementById("msg")

	if(score < 50) {
		msg.textContent = "You need at least 50 points to qualify!";
	}
	else if(score >= 50 && score <= 80)
	{
		msg.textContent = "You are eligible for the beginner level!";
	}
	else if (score > 80)
	{
		msg.textContent = "You qualify for the advanced level!";
		msg.style.color = "green";
	}

}

Create an HTML page with a square box (<div>) styled with position: absolute;.
Also add a button labeled "Move Box".
When the button is clicked, the box should move to a random position within the browser window.
Use addEventListener to listen for the click event and generate random top and left values to reposition the box.

Example:

First click → Box moves to top-left area.

Second click → Box jumps near the bottom-right.

Third click → Box moves somewhere in the middle.