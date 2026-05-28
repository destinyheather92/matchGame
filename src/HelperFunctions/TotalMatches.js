export default function TotalMatches(cards){
    let totalMatches=0;
    let freqCounter = cards.reduce((acc,curr)=>{
        
        if(acc[curr.value]){
            acc[curr.value] += 1
        }else{
            acc[curr.value] = 1
        }
        return acc
    },{})
  
    for(let card in freqCounter){
        if((freqCounter[card]>= 2)){
            totalMatches += Math.floor(freqCounter[card]/2)
        }
    }
    // 
    
    return totalMatches
}
//this function is calculationg the total matches. It takes a parameter of cards to be passed in through the parent componenet which will ultiamtely be our random 24 cards. 
//Create a variable calle total matches to hold the total of matches. 
//create a frequency counter to count the value of the cards. 
//return the object, then loop through them using a for in loop. 
//if the number of times the card appears in the sequence is greater than 2 then I want to add to the total matches. Which whill divide the number of times it occurs to get the total. so if it appears 4 times, it will be two matches. Math.floor is used in the event we have 3 cards of the same value. 3/2 is 1.6667 but I dont need the decimal, just the one. 