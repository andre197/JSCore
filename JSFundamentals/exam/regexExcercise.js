function surveyParser(input){
    let svgPattern = /\D*?<svg>(.*?)<\/svg>\D*?/mg;
    let headingLableAndRatingPattern = /<cat>(\D+?)<\/cat><cat>(.+?)<\/cat>/mg;
    let catFirstSectionContent = /^<text>\D*?\[(\D*?)]<\/text>$/mg;
    let valueAndRatingPattern = /<g><val>([0-9]{1,2})<\/val>(\d+?)<\/g>/mg;

    let survey = svgPattern.exec(input);

    if (survey === null || survey === undefined) {
        console.log('No survey found');
        return;        
    }

    let catMatch = headingLableAndRatingPattern.exec(survey[1]);
    if (catMatch === null || catMatch === undefined) {
        console.log('Invalid format');
        return;        
    }

    let cat1 = catMatch[1];
    let cat2 = catMatch[2];

    let textMatch = catFirstSectionContent.exec(cat1);

    if (textMatch === null || textMatch === undefined) {
        console.log('Invalid format');
        return;
    }

    let surveyLabel = textMatch[1];

    let matchesCnt = 0;
    let surveyRate = 0;

    while(true){
        let valueCntMatch = valueAndRatingPattern.exec(cat2);

        if (valueCntMatch !== null && valueCntMatch !== undefined ) {
            let value = Number(valueCntMatch[1]);
            let cnt = Number(valueCntMatch[2]);

            if (cnt > 0) {
                matchesCnt += cnt;
                surveyRate += value * cnt;
            }
        } else {
            break;
        }
    }

    if (matchesCnt === 0) {
        console.log('Invalid format');
        return;
    }


    console.log(surveyLabel + ': ' + (surveyRate/matchesCnt).toFixed(2));
    

}

surveyParser("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>");