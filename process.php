<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72467796-1', 'auto');
	ga('send', 'event', 'register', 'alpha', 'alphaWebsite');
</script>

<?php
// Information to be modified
$to_email = "reynolds.nicorr@gmail.com"; // email address to which the form data will be sent
$subject = "Democracy01 - New player"; // subject of the email that is sent
$thanks_page = "index.html"; // path to the thank you page following successful form submission
$contact_page = "index.html"; // path to the HTML contact page where the form appears


$nam = strip_tags($_POST["contact_name"]);
$ema = strip_tags($_POST["contact_email"]);
$com = strip_tags($_POST["contact_message"]);

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: <' .$ema. '>' . "\r\n";
$headers .= "Reply-To: ".$ema."\r\n";

$email_body =
	"<strong>From: </strong>" . $nam . "<br />
	<strong>Email: </strong>" . $ema . "<br />
	<strong>Message: </strong>" . $com;


// Assuming there's no error, send the email and redirect to Thank You page

if( mail($to_email, $subject, $email_body, $headers) ) {
	echo '<i class="glyphicon glyphicon-ok"></i> Thank you ' .$nam. '. Your Email was successfully sent!';
} else {
	echo '<i class="glyphicon glyphicon-remove"></i> Sorry ' .$nam. '. Your Email was not sent. Resubmit form again Please..';
}
die();
