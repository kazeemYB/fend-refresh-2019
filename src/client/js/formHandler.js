function handleSubmit(event) {
    event.preventDefault()
    
    let formText = document.getElementById('url').value;
    const errorMessage = document.getElementById('errorMessage');
    const lineBr = '<hr>';
   
    // Checks inputed text in form
    if (Client.checkForName(formText)) {
    
        //Fetch request
        fetch('http://localhost:8080/addData', {
            
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({formText: formText}),
            
            })
            .then(res => res.json())
        
            .then(function(res) {
            const results = document.getElementById('results');
            results.scrollIntoView(false, {behavior:'smooth', block:"end"})
                
            document.getElementById('confidence').innerHTML = "- Confidence rating is " + res.confidence +"%";

            if (res.score_tag === 'N') {
            document.getElementById('score_tag').innerHTML = "- Analysis for score tag reports NEGATIVE.";
            } else if (res.score_tag === 'N+') {
                document.getElementById('score_tag').innerHTML = "- Analysis for score tag reports VERY NEGATIVE.";
            } else if (res.score_tag === 'NONE') {
                document.getElementById('score_tag').innerHTML = "- Analysis for score tag reports NO SENTIMENT DETECTED.";
            } else if (res.score_tag === 'P+') {
                document.getElementById('score_tag').innerHTML = "- Analysis for score tag reports VERY POSITIVE.";
            } else if (res.score_tag === 'NEU') {
                document.getElementById('score_tag').innerHTML = "- Analysis for score tag reports NEUTRAL.";
            } else if (res.score_tag === 'P') {
                document.getElementById('score_tag').innerHTML = "- Analysis for score tag reports POSITIVE.";
            };

            if (res.agreement === 'AGREEMENT') {
                document.getElementById('agreement').innerHTML = "- Analysis for agreement reports AGREEMENT";
            } else if (res.agreement === 'DISAGREEMENT') {
                document.getElementById('agreement').innerHTML = "- Analysis for agreement reports DISAGREEMENT";
                
            };

            if (res.subjectivity === 'OBJECTIVE') {
                document.getElementById('subjectivity').innerHTML = "- Analysis for subjectivity reports article is more OBJECTIVE than subjective.";
            } else if (res.subjectivity === 'SUBJECTIVE') {
                document.getElementById('subjectivity').innerHTML = "- Analysis for subjectivity reports article is more SUBJECTIVE than objective.";
            } else if (res.subjectivity === null){
                document.getElementById('subjectivity').innerHTML = "";
            } 

            if (res.irony === 'NONIRONIC'){
                document.getElementById('irony').innerHTML = "- Analysis for irony reports NO IRONY.";
            } else if (res.irony === 'IRONIC'){
                document.getElementById('irony').innerHTML = "- Analysis for irony reports IRONIC.";
            } else if (res.irony === null){
                document.getElementById('irony').innerHTML = "";
            };
        })
        errorMessage.innerHTML = "";
        document.getElementById("results_head").innerHTML = `Analyzing "${formText}" with MeaningCloud API.`;
        document.getElementById("lineBr").innerHTML = lineBr;
        console.log(`Valid URL -> ${formText}.`)
    } else {
        errorMessage.innerHTML = `Please Enter a Valid URL | For Example- https://www.example.com | This input (${formText}) is invalid.`;
        console.log(errorMessage.innerHTML, `Invalid URL -> ${formText}.`)
    }
    console.log("::: Form Submitted :::")
}


export { handleSubmit }