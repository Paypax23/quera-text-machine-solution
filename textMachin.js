const prompt = require("prompt-sync")()
class TextMachine{
    constructor(param){
        this.param = param; 
    }
    
    SHIFT_R(n) {  
        let paramList = this.param.split('')
        
        n = n % paramList.length; 
        for (let i = 0; i < n; i++) {  
            paramList.unshift(paramList.pop());  
        }  
        this.param = paramList.join('')
    }   
    SHIFT_L(n) {  
        let paramList = this.param.split('')
        
        n = n % paramList.length; 
        for (let i = 0; i < n; i++) {  
            paramList.push(paramList.shift())
        }  
        this.param = paramList.join('')
    }  
    EXTEND (n){
        let paramList = this.param.split('')
        for(let i=0;i<n;i++){
            paramList.push('*')
        }
        this.param = paramList.join('')
    }
    SHRINK (n){
        let paramList = this.param.split('')
        if(n>=paramList.length){
            this.param = ''
        }
        else{

            for(let i=0;i<n;i++){
                paramList.pop();
            }
            this.param = paramList.join('')
        }
    }
    REVERSE(){
        let reversedParam = []
        let len = this.param.length-1
        let paramList = this.param.split('')
        for(let i=len;i>=0;i--){
            reversedParam.push(paramList[i])
        }
        this.param= reversedParam.join('');
    }
    PUT (i,c){
        let paramList = this.param.split('')
        paramList.splice(i-1,1,c)
        this.param = paramList.join('')
    }
    PRINT(){
        console.log(this.param)
    }

}
// main text input 
let mainText = prompt()
let textMachine = new TextMachine(mainText)

while(true){
    // oreders input 
    let inputText = prompt()
    inputText = inputText.split('');

    if(inputText.includes("SHIFT-R")){
        let number = inputText[1];
        textMachine.SHIFT_R(number)
    }
    else if(inputText.includes("SHIFT-L")){
        let number = inputText[1];
        textMachine.SHIFT_L(number)
    }

    else if(inputText.includes("EXTEND")){
        let number = inputText[1];
        textMachine.EXTEND(number)
    } 
    else if(inputText.includes("SHRINK")){
        let number = inputText[1];
        textMachine.SHRINK(number)
    }
    else if(inputText.includes("REVERSE")){
        textMachine.REVERSE()
    }
    else if(inputText.includes("PUT")){
        let index = inputText[1]
        let char = inputText[2]
        textMachine(index,char)
    }
    else if(inputText.includes("PRINT")){
        textMachine.PRINT()
    }
    else if (inputText.includes("EXIT")){
        break;
    }
    


}




