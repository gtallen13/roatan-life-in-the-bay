//makes line breaks for text from DB
const breakLine = (text) =>{
    const modText = text.replace(/\\n/g,`${"\n"}`)
    return modText;
}


//helps shorten description from DB
const descriptionLimiter = (string='',limit=0)=>{
    return string.substring(0,limit);
}
export {breakLine, descriptionLimiter};