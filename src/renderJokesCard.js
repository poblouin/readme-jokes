const width = '100%';
const height = '100%';

// Question-Answer type card
const qnaCard = (qColor, aColor, bg, borderColor, codeColor, question, answer, hideBorder) => {
  let border = `2px solid ${borderColor}`;
  if (hideBorder !== undefined) {
    border = '2px solid transparent';
  }
  const card = `
  <svg width="500" height="75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="${width}" height="${height}">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          * {
            margin: 0;
          }
          .container{
            width: 500px;
            height: 75px;
            border: ${border};
            border-radius: 10px;
            box-sizing: border-box;
            background-color: #${bg};
            display: flex;
            align-items: center
          }
          .text{
            padding: 0.5rem;
            font-family: Arial, Helvetica, sans-serif;
          }
          .question {
            color: ${qColor};
            margin-bottom: 4px;
          }
          .answer {
            color: ${aColor};
          }
          code {
            font-size: 1.2rem;
            color: ${codeColor};
          }
        </style>
        <div class="container">
          <div class="text">
            <p class="question"><b>Q.</b> ${question}</p>
            <p class="answer"><b>A.</b> ${answer} </p>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>`;
  return card;
};

// Quotation type card
const quoteCard = (textColor, bg, borderColor, codeColor, quote, hideBorder) => {
  let border = `2px solid ${borderColor}`;
  if (hideBorder !== undefined) {
    border = '2px solid transparent';
  }
  const card = `
  <svg width="500" height="75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="${width}" height="${height}">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          * {
            margin: 0;
          }
          .container{
            width: 500px;
            height: 75px;
            border: ${border};
            border-radius: 10px;
            box-sizing: border-box;
            background-color: #${bg};
            display: flex;
            align-items: center
          }
          .text{
            padding: 0.5rem;
            font-family: Arial, Helvetica, sans-serif;
          }
          .quote {
            color: ${textColor};
          }
          code {
            font-size: 1.2rem;
            color: ${codeColor};
          }
        </style>
        <div class="container">
          <div class="text">
            <p class="quote">${quote}</p>
          </div>
        </div>
      </div>
    </foreignObject>
  </svg>
  `;
  return card;
};

module.exports = {
  qnaCard,
  quoteCard,
};
