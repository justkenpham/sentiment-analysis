const db = require('../models/database');
const express = require('express');
const natural = require('natural');
const aposToLexForm = require('apos-to-lex-form');
const SpellCorrector = require('spelling-corrector');
const SW = require('stopword');

//initialize spelling-corrector
const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

//function to calculate overall of review
//function calculateOverall(review){
exports.calculateOverall =  (review) => {
    review = aposToLexForm(review); //convert contraction to standard lexicon

    review = review.toLowerCase(); //convert to lower case

    review = review.replace(/[^a-zA-Z\s]+/g, ''); //remove non-alphabetical and special characters

    //separate review into words
    const { WordTokenizer } = natural;
    const tokenizer = new WordTokenizer();
    review = tokenizer.tokenize(review);

    //check spelling-correction
    review.forEach((word, index) => {
        review[index] = spellCorrector.correct(word);
    });

    review = SW.removeStopwords(review); // remove stop-words

    //sentimental score
    if(review == ''){
        return 2.5;
    }
    else{
        const { SentimentAnalyzer, PorterStemmer } = natural;
        const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
        let analysis = analyzer.getSentiment(review);
        analysis = analysis/3*2.5 + 2.5;
        return Math.round(analysis * 10) / 10 ;
    }
      
}
//console.log(calculateOverall(`what is this`))



exports.takeRating = (product_id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT COUNT(review_id) AS num_reviews FROM review WHERE product_id = ?`, [product_id], async (err, result) => {
            if(err){
                reject(err);
            }
            else {
                const num_reviews = result[0].num_reviews;
                resolve(num_reviews);
            }
        })
    })
}



//console.log(takeRating(11));